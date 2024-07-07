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

    const command = `npm init -y`;

    try {
        if (fileSystem.mkdir) {
            await fileSystem.mkdir(absoluteProjectDir, { recursive: true });
        }
        process.chdir(absoluteProjectDir);

        await commandExecutor.execute(command, { cwd: absoluteProjectDir });

        const packageJsonPath = resolve(absoluteProjectDir, 'package.json');
        const packageJson = JSON.parse(await fileSystem.readFile(packageJsonPath, 'utf-8'));
        packageJson.name = projectName;

        if (language === 'TypeScript') {
            const tsDependencies = [
                'typescript',
                'ts-node',
                '@types/node',
            ];
            const installTsDepsCommand = `npm install --save-dev ${tsDependencies.join(' ')}`;
            await commandExecutor.execute(installTsDepsCommand, { cwd: absoluteProjectDir });

            await generateTypeScriptConfig(absoluteProjectDir, fileSystem);
        }

        await fileSystem.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));

        if (dependencies.length > 0) {
            const installDepsCommand = `npm install ${dependencies.join(' ')}`;
            await commandExecutor.execute(installDepsCommand, { cwd: absoluteProjectDir });
        }

        if (lintingTools.includes('ESLint')) {
            const eslintCommand = `npm install eslint --save-dev`;
            await commandExecutor.execute(eslintCommand, { cwd: absoluteProjectDir });
            await generateESLintConfig(absoluteProjectDir);
        }

        if (formattingTools.includes('Prettier')) {
            const prettierCommand = `npm install prettier --save-dev`;
            await commandExecutor.execute(prettierCommand, { cwd: absoluteProjectDir });
            await generatePrettierConfig(absoluteProjectDir);
        }

        if (testingTools.includes('jest')) {
            const jestCommand = `npm install jest ts-jest @types/jest --save-dev`;
            await commandExecutor.execute(jestCommand, { cwd: absoluteProjectDir });
            await generateJestConfig(absoluteProjectDir, 'Node.js');
        }

        if (testingTools.includes('mocha')) {
            const mochaCommand = `npm install mocha chai @types/mocha @types/chai ts-node --save-dev`;
            await commandExecutor.execute(mochaCommand, { cwd: absoluteProjectDir });
            await generateMochaConfig(absoluteProjectDir, 'Node.js');
        }

        if (testingTools.includes('@testing-library/react')) {
            const testingLibraryCommand = `npm install @testing-library/react @testing-library/jest-dom @testing-library/user-event --save-dev`;
            await commandExecutor.execute(testingLibraryCommand, { cwd: absoluteProjectDir });
            await generateTestingLibraryConfig(absoluteProjectDir, 'Node.js');
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
        spinner.stop();
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
