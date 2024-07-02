import { createReactProject } from './react-initializer';
import { createAngularProject } from './angular-initializer';
import { createNodeJsProject } from './nodejs-initializer';
import { createVueJsProject } from './vuejs-initializer';

export async function createProject(projectDir: string, projectType: string, language: string): Promise<void> {
    switch (projectType) {
        case 'React':
            await createReactProject(projectDir, language);
            break;
        case 'Angular':
            await createAngularProject(projectDir);
            break;
        case 'Node.js':
            await createNodeJsProject(projectDir);
            break;
        case 'Vue.js':
            await createVueJsProject(projectDir, language);
            break;
        default:
            throw new Error(`Unsupported project type: ${projectType}`);
    }
}
