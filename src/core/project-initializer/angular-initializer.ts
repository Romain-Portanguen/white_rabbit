import { execaCommand } from 'execa';
import { resolve, basename } from 'path';
import { Answers } from '../../@types/answers.js';
import { promises as fs } from 'fs';
import ora from 'ora';
import Logger from '../../utils/logger.js';

export async function createAngularProject(projectDir: string): Promise<void> {
    const absoluteProjectDir = resolve(projectDir);
    const projectName = basename(projectDir);

    try {
        await fs.mkdir(absoluteProjectDir, { recursive: true });
        process.chdir(absoluteProjectDir);

        const command = `npx @angular/cli new ${projectName} --strict`;

        await execaCommand(command);
    } finally {
        process.chdir(absoluteProjectDir);
    }
}

export async function runAngularCLI(answers: Answers): Promise<void> {
    const { projectName, destination } = answers;
    const projectDir = `${destination}/${projectName}`;
    const spinner = ora('Initializing Angular project...').start();

    try {
        spinner.stop();
        const command = `npx @angular/cli new ${projectName} --strict`;
        await execaCommand(command, { stdio: 'inherit', cwd: destination });
        spinner.succeed(`Angular project created successfully at ${projectDir}`);
        Logger.log('Application created successfully, happy hacking! 🚀');
        process.exit(0);
    } catch (error) {
        spinner.fail('Error initializing Angular project');
        throw error;
    }
}