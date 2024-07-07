import { createReactProject } from './react-initializer';
import { createAngularProject } from './angular-initializer';
import { createNodeJsProject } from './nodejs-initializer';
import { createVueJsProject } from './vuejs-initializer';
import CommandExecutorInterface from '../../@types/utils/command-executor';
import FileSystemInterface from '../../@types/utils/file-system';

export async function createProject(
    projectDir: string,
    projectType: string,
    language: string,
    commandExecutor: CommandExecutorInterface,
    fileSystem: FileSystemInterface
): Promise<void> {
    switch (projectType) {
        case 'React':
            await createReactProject(projectDir, language, commandExecutor);
            break;
        case 'Angular':
            await createAngularProject(projectDir, commandExecutor, fileSystem);
            break;
        case 'Node.js':
            await createNodeJsProject(projectDir, commandExecutor);
            break;
        case 'Vue.js':
            await createVueJsProject(projectDir, language, commandExecutor, fileSystem);
            break;
        default:
            throw new Error(`Unsupported project type: ${projectType}`);
    }
}
