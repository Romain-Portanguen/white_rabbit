import { createReactProject } from './react-initializer';
import { createAngularProject } from './angular-initializer';
import { createNodeJsProject } from './nodejs-initializer';
import { createVueJsProject } from './vuejs-initializer';
import CommandExecutorInterface from '../../@types/utils/command-executor';
import FileSystemInterface from '../../@types/utils/file-system';
import PackageManagerChecker from '../../core/package-manager-checker';

export async function createProject(
    projectDir: string,
    projectType: string,
    language: string,
    projectName: string,
    commandExecutor: CommandExecutorInterface,
    fileSystem: FileSystemInterface,
    packageManagerChecker: PackageManagerChecker,
    dependencies: string[],
    lintingTools: string[],
    formattingTools: string[],
    testingTools: string[]
): Promise<void> {
    switch (projectType) {
        case 'React':
            await createReactProject(projectDir, language, commandExecutor);
            break;
        case 'Angular':
            await createAngularProject(projectDir, commandExecutor, fileSystem);
            break;
        case 'Node.js':
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
            break;
        case 'Vue.js':
            await createVueJsProject(projectDir, language, commandExecutor, fileSystem);
            break;
        default:
            throw new Error(`Unsupported project type: ${projectType}`);
    }
}
