import ora from 'ora';
import DependencyInstallerInterface from '../@types/core/dependency-installer';
import PackageManagerCheckerInterface from '../@types/core/package-manager-checker';
import CommandExecutorInterface from '../@types/utils/command-executor';
import PackageManagerChecker from './package-manager-checker';

export default class DependencyInstaller implements DependencyInstallerInterface {
    private packageManagerChecker: PackageManagerCheckerInterface;
    private commandExecutor: CommandExecutorInterface;

    constructor(
        packageManagerChecker: PackageManagerCheckerInterface = new PackageManagerChecker(),
        commandExecutor: CommandExecutorInterface
    ) {
        this.packageManagerChecker = packageManagerChecker;
        this.commandExecutor = commandExecutor;
    }

    public async installDependencies(dependencies: string[], packageManager: string, projectDir: string): Promise<void> {
        if (dependencies.length === 0) {
            return;
        }

        packageManager = await this.packageManagerChecker.checkAvailability(packageManager);

        const command = this.getInstallCommand(dependencies, packageManager);
        const spinner = ora(`Installing dependencies with ${packageManager}...`).start();

        try {
            await this.commandExecutor.execute(command, {cwd: projectDir});
            spinner.succeed('Dependencies installed successfully');
        } catch (error: any) {
            spinner.fail(`Error installing dependencies: ${error.message}`);
            throw new Error(`Error installing dependencies: ${error.message}`);
        }
    }

    private getInstallCommand(dependencies: string[], packageManager: string): string {
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
