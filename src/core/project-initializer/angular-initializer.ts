import { resolve, basename } from 'path';
import { Answers } from '../../@types/common/answers';
import ora from 'ora';
import Logger from '../../utils/logger';
import CommandExecutorInterface from '../../@types/utils/command-executor';
import FileSystemInterface from '../../@types/utils/file-system';

const USE_COLORS = true;
const logger = new Logger(USE_COLORS);

export async function createAngularProject(
    projectDir: string,
    commandExecutor: CommandExecutorInterface,
    fileSystem: FileSystemInterface
): Promise<void> {
    const absoluteProjectDir = resolve(projectDir);
    const projectName = basename(projectDir);

    try {
        if (fileSystem.mkdir) {
            await fileSystem.mkdir(absoluteProjectDir, { recursive: true });
        }
        process.chdir(absoluteProjectDir);

        const command = `npx @angular/cli new ${projectName} --strict`;

        await commandExecutor.execute(command, { cwd: absoluteProjectDir });
    } finally {
        process.chdir(absoluteProjectDir);
    }
}

export async function runAngularCLI(
    answers: Answers,
    commandExecutor: CommandExecutorInterface
): Promise<void> {
    const { projectName, destination } = answers;
    const projectDir = `${destination}/${projectName}`;
    const spinner = ora('Initializing Angular project...').start();

    try {
        spinner.stop();
        const command = `npx @angular/cli new ${projectName} --strict`;
        await commandExecutor.execute(command, { stdio: 'inherit', cwd: destination });
        spinner.succeed(`Angular project created successfully at ${projectDir}`);
        logger.log('Application created successfully, happy hacking! 🚀');
        process.exit(0);
    } catch (error: any) {
        spinner.fail('Error initializing Angular project');
        logger.error(error.message);
        throw error;
    }
}
