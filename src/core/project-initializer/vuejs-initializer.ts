import { resolve, basename } from 'path';
import ora from 'ora';
import CommandExecutorInterface from '../../@types/utils/command-executor';
import FileSystemInterface from '../../@types/utils/file-system';

async function createVueJsProject(
    projectDir: string,
    language: string,
    commandExecutor: CommandExecutorInterface,
    fileSystem: FileSystemInterface
): Promise<void> {
    const absoluteProjectDir = resolve(projectDir);
    const projectName = basename(projectDir);
    const spinner = ora('Creating Vue.js project...').start();

    try {
        await commandExecutor.execute(`npm init vue@latest ${projectName} -- --default`, { cwd: resolve(absoluteProjectDir, '..') });

        if (language === 'TypeScript') {
            await commandExecutor.execute('npm install -D typescript @vue/tsconfig vue-tsc', { cwd: absoluteProjectDir });
            
            const tsconfigContent = `{
                "extends": "@vue/tsconfig/tsconfig.json",
                "compilerOptions": {
                    "composite": true,
                    "verbatimModuleSyntax": true
                },
                "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
                "references": [
                    {
                        "path": "./tsconfig.node.json"
                    }
                ]
            }`;
            
            const tsconfigNodeContent = `{
                "compilerOptions": {
                    "composite": true,
                    "module": "ESNext",
                    "moduleResolution": "Node",
                    "allowSyntheticDefaultImports": true
                },
                "include": ["vite.config.ts"]
            }`;
            
            await fileSystem.writeFile(resolve(absoluteProjectDir, 'tsconfig.json'), tsconfigContent);
            await fileSystem.writeFile(resolve(absoluteProjectDir, 'tsconfig.node.json'), tsconfigNodeContent);
        }

        spinner.succeed('Vue.js project created successfully');
    } catch (error: any) {
        spinner.fail(`Error creating Vue.js project: ${error.message}`);
        throw new Error(`Error creating Vue.js project: ${error.message}`);
    }
}

export { createVueJsProject };
