import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default class ProjectInitializer {
    static async createProject(projectDir: string, projectType: string, language: string): Promise<void> {
        let command = '';

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
                throw new Error(`Unsupported project type: ${projectType}`);
        }

        try {
            await execAsync(command);
            console.log(`Project ${projectType} created successfully at ${projectDir}`);
        } catch (error: any) {
            throw new Error(`Error creating project: ${error.message}`);
        }
    }
}
