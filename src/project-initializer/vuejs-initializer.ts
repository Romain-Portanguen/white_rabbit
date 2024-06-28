import { execaCommand } from 'execa';
import { resolve, basename } from 'path';
import { promises as fs } from 'fs';
import ora from 'ora';

async function createVueJsProject(projectDir: string, language: string): Promise<void> {
    const absoluteProjectDir = resolve(projectDir);
    const projectName = basename(projectDir);
    const spinner = ora('Creating Vue.js project...').start();

    try {
        console.log(`Running command: npm init vue@latest ${projectName} -- --default`);
        await execaCommand(`npm init vue@latest ${projectName} -- --default`, { cwd: resolve(absoluteProjectDir, '..') });

        if (language === 'TypeScript') {
            console.log(`Running command: npm install -D typescript @vue/tsconfig vue-tsc`);
            await execaCommand('npm install -D typescript @vue/tsconfig vue-tsc', { cwd: absoluteProjectDir });
            
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
            
            await fs.writeFile(resolve(absoluteProjectDir, 'tsconfig.json'), tsconfigContent);
            await fs.writeFile(resolve(absoluteProjectDir, 'tsconfig.node.json'), tsconfigNodeContent);
        }

        spinner.succeed('Vue.js project created successfully');
    } catch (error: any) {
        spinner.fail(`Error creating Vue.js project: ${error.message}`);
        throw new Error(`Error creating Vue.js project: ${error.message}`);
    }
}

export { createVueJsProject };
