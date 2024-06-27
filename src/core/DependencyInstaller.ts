import { exec } from 'child_process';
import ora from 'ora';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default class DependencyInstaller {
    static async installDependencies(dependencies: string[], packageManager: string, projectDir: string): Promise<void> {
        if (dependencies.length === 0) {
            return;
        }

        const command = this.getInstallCommand(dependencies, packageManager);
        const spinner = ora(`Installing dependencies with ${packageManager}...`).start();

        try {
            await execAsync(command, { cwd: projectDir });
            spinner.succeed('Dependencies installed successfully');
        } catch (error: any) {
            spinner.fail(`Error installing dependencies: ${error.message}`);
            throw new Error(`Error installing dependencies: ${error.message}`);
        }
    }

    private static getInstallCommand(dependencies: string[], packageManager: string): string {
        switch (packageManager) {
            case 'yarn':
                return `yarn add ${dependencies.join(' ')}`;
            case 'pnpm':
                return `pnpm add ${dependencies.join(' ')}`;
            case 'npm':
            default:
                return `npm install ${dependencies.join(' ')}`;
        }
    }
}
