import { execaCommand } from 'execa';
import ora from 'ora';

export default class DependencyInstaller {
    static async installDependencies(dependencies: string[], packageManager: string, projectDir: string): Promise<void> {
        if (dependencies.length === 0) {
            return;
        }

        packageManager = await this.checkPackageManagerAvailability(packageManager);

        const command = this.getInstallCommand(dependencies, packageManager);
        const spinner = ora(`Installing dependencies with ${packageManager}...`).start();

        try {
            await execaCommand(command, { cwd: projectDir });
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

    private static async checkPackageManagerAvailability(packageManager: string): Promise<string> {
        const packageManagers = ['pnpm', 'yarn', 'npm'];
        const fallbackManagers: { [key: string]: string } = {
            pnpm: 'yarn',
            yarn: 'npm',
            npm: 'npm'
        };

        for (let i = 0; i < packageManagers.length; i++) {
            if (packageManager === packageManagers[i]) {
                if (await this.isPackageManagerAvailable(packageManager)) {
                    return packageManager;
                }
                console.warn(`${packageManager} not found, falling back to ${fallbackManagers[packageManager]}`);
                packageManager = fallbackManagers[packageManager];
            }
        }

        return packageManager;
    }

    private static async isPackageManagerAvailable(packageManager: string): Promise<boolean> {
        try {
            await execaCommand(`${packageManager} --version`);
            return true;
        } catch {
            return false;
        }
    }
}
