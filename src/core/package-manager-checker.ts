import { execaCommand } from 'execa';
import PackageManagerCheckerInterface from '../@types/core/package-manager-checker';

export default class PackageManagerChecker implements PackageManagerCheckerInterface {
    private static packageManagers = ['pnpm', 'yarn', 'npm'];
    private static fallbackManagers: { [key: string]: string } = {
        pnpm: 'yarn',
        yarn: 'npm',
        npm: 'npm'
    };

    public async checkAvailability(packageManager: string): Promise<string> {
        for (let i = 0; i < PackageManagerChecker.packageManagers.length; i++) {
            if (packageManager === PackageManagerChecker.packageManagers[i]) {
                if (await this.isAvailable(packageManager)) {
                    return packageManager;
                }
                packageManager = PackageManagerChecker.fallbackManagers[packageManager];
            }
        }
        return packageManager;
    }

    public async isAvailable(packageManager: string): Promise<boolean> {
        try {
            await execaCommand(`${packageManager} --version`);
            return true;
        } catch {
            return false;
        }
    }
}
