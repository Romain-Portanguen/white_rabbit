import CommandExecutorInterface from '../../@types/utils/command-executor';
import FileSystemInterface from '../../@types/utils/file-system';
import PackageManagerChecker from '../../core/package-manager-checker';
import ora from 'ora';
import Logger from '../../utils/logger';
import { resolve } from 'path';
import { Answers } from '../../@types/common/answers';
import { generateESLintConfig } from '../../utils/configurations/eslint-config';
import { generatePrettierConfig } from '../../utils/configurations/prettier-config';
import { generateJestConfig } from '../../utils/configurations/jest-config';
import { generateMochaConfig } from '../../utils/configurations/mocha-config';
import { generateTestingLibraryConfig } from '../../utils/configurations/testing-library-config';
import { generateTypeScriptConfig } from '../../utils/configurations/typescript-config';

const USE_COLORS = true;
const logger = new Logger(USE_COLORS);

const DEPENDENCY_INSTALL_CMD = (deps: string[]) => `npm install ${deps.join(' ')}`;
const DEV_DEPENDENCY_INSTALL_CMD = (deps: string[]) => `npm install --save-dev ${deps.join(' ')}`;

async function installDependencies(
    commandExecutor: CommandExecutorInterface,
    projectDir: string,
    dependencies: string[]
) {
    if (dependencies.length > 0) {
        const command = DEPENDENCY_INSTALL_CMD(dependencies);
        await commandExecutor.execute(command, { cwd: projectDir });
    }
}

async function installDevDependencies(
    commandExecutor: CommandExecutorInterface,
    projectDir: string,
    devDependencies: string[]
) {
    if (devDependencies.length > 0) {
        const command = DEV_DEPENDENCY_INSTALL_CMD(devDependencies);
        await commandExecutor.execute(command, { cwd: projectDir });
    }
}

async function installAndConfigureTool(
    commandExecutor: CommandExecutorInterface,
    projectDir: string,
    installCommand: string,
    configFunction: (dir: string, ...args: any[]) => Promise<void>,
    ...configArgs: any[]
) {
    await commandExecutor.execute(installCommand, { cwd: projectDir });
    await configFunction(projectDir, ...configArgs);
}

const toolConfigurations: { [key: string]: {
    condition: (tools: string[]) => boolean;
    installCommand: string;
    configFunction: (dir: string, ...args: any[]) => Promise<void>;
    configArgs?: any[];
}} = {
    ESLint: {
        condition: (tools: string[]) => tools.includes('ESLint'),
        installCommand: `npm install eslint --save-dev`,
        configFunction: generateESLintConfig,
    },
    Prettier: {
        condition: (tools: string[]) => tools.includes('Prettier'),
        installCommand: `npm install prettier --save-dev`,
        configFunction: generatePrettierConfig,
    },
    jest: {
        condition: (tools: string[]) => tools.includes('jest'),
        installCommand: `npm install jest ts-jest @types/jest --save-dev`,
        configFunction: generateJestConfig,
        configArgs: ['Node.js'],
    },
    mocha: {
        condition: (tools: string[]) => tools.includes('mocha'),
        installCommand: `npm install mocha chai @types/mocha @types/chai ts-node --save-dev`,
        configFunction: generateMochaConfig,
        configArgs: ['Node.js'],
    },
    testingLibraryReact: {
        condition: (tools: string[]) => tools.includes('@testing-library/react'),
        installCommand: `npm install @testing-library/react @testing-library/jest-dom @testing-library/user-event --save-dev`,
        configFunction: generateTestingLibraryConfig,
        configArgs: ['Node.js'],
    },
};

export async function createNodeJsProject(
    projectDir: string,
    projectName: string,
    language: string,
    commandExecutor: CommandExecutorInterface,
    fileSystem: FileSystemInterface,
    packageManagerChecker: PackageManagerChecker,
    dependencies: string[] = [],
    lintingTools: string[] = [],
    formattingTools: string[] = [],
    testingTools: string[] = []
): Promise<void> {
    const absoluteProjectDir = resolve(projectDir);

    const packageManager = await packageManagerChecker.checkAvailability('npm');

    if (packageManager !== 'npm') {
        throw new Error('npm is not available');
    }

    try {
        await fileSystem.mkdir(absoluteProjectDir, { recursive: true });
        process.chdir(absoluteProjectDir);

        await commandExecutor.execute(`npm init -y`, { cwd: absoluteProjectDir });

        if (language === 'TypeScript') {
            const tsDependencies = [
                'typescript',
                'ts-node',
                'ts-node-dev',
                '@types/node',
            ];
            await installDevDependencies(commandExecutor, absoluteProjectDir, tsDependencies);
            await generateTypeScriptConfig(absoluteProjectDir, fileSystem);
        }

        await installDependencies(commandExecutor, absoluteProjectDir, dependencies);

        for (const toolKey in toolConfigurations) {
            const toolConfig = toolConfigurations[toolKey];
            if (toolConfig.condition(lintingTools) || toolConfig.condition(formattingTools) || toolConfig.condition(testingTools)) {
                await installAndConfigureTool(
                    commandExecutor,
                    absoluteProjectDir,
                    toolConfig.installCommand,
                    toolConfig.configFunction,
                    ...(toolConfig.configArgs || [])
                );
            }
        }

    } finally {
        process.chdir(absoluteProjectDir);
    }
}

export async function runNodeJsInit(
    answers: Answers,
    commandExecutor: CommandExecutorInterface,
    fileSystem: FileSystemInterface,
    packageManagerChecker: PackageManagerChecker
): Promise<void> {
    const { projectName, destination, language, dependencies = [], lintingTools = [], formattingTools = [], testingTools = [] } = answers;
    const projectDir = `${destination}/${projectName}`;
    const spinner = ora('Initializing Node.js project...').start();

    try {
        await createNodeJsProject(
            projectDir,
            projectName,
            language,
            commandExecutor,
            fileSystem,
            packageManagerChecker,
            dependencies,
            lintingTools,
            formattingTools,
            testingTools
        );
        spinner.succeed(`Node.js project created successfully at ${projectDir}`);
        logger.log('Application created successfully, happy hacking! 🚀');
        process.exit(0);
    } catch (error: any) {
        spinner.fail('Error initializing Node.js project');
        logger.error(error.message);
        throw error;
    }
}
