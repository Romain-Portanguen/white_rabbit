import { exec } from 'child_process';
import ora from 'ora';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default class ProjectInitializer {
    static async createProject(projectDir: string, projectType: string, language: string): Promise<void> {
        let command = '';
        const spinner = ora(`Creating ${projectType} project...`).start();

        switch (projectType) {
            case 'React':
                command = language === 'TypeScript' ?
                    `npx create-react-app ${projectDir} --template typescript` :
                    `npx create-react-app ${projectDir}`;
                break;
            case 'Angular':
                command = `npx @angular/cli new ${projectDir} --strict`;
                break;
            case 'Node.js':
                command = `npx express-generator ${projectDir}`;
                break;
            case 'Vue.js':
                command = language === 'TypeScript' ?
                    `npx @vue/cli create ${projectDir} --preset default-ts` :
                    `npx @vue/cli create ${projectDir}`;
                break;
            default:
                spinner.fail(`Unsupported project type: ${projectType}`);
                throw new Error(`Unsupported project type: ${projectType}`);
        }

        try {
            await execAsync(command);
            spinner.succeed(`Project ${projectType} created successfully at ${projectDir}`);
        } catch (error: any) {
            spinner.fail(`Error creating project: ${error.message}`);
            throw new Error(`Error creating project: ${error.message}`);
        }
    }
}
