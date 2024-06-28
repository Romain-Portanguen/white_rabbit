import { execaCommand } from 'execa';
import ora from 'ora';
import { promises as fs } from 'fs';
import { join } from 'path';

export default class GitInitializer {
    static async initializeGitRepository(projectDir: string): Promise<void> {
        const spinner = ora('Initializing Git repository...').start();

        try {
            await execaCommand('git --version');
            
            await execaCommand('git init', { cwd: projectDir });
            spinner.succeed('Git repository initialized successfully');
        } catch (error: any) {
            spinner.fail(`Error initializing Git repository: ${error.message}`);
            throw new Error(`Error initializing Git repository: ${error.message}`);
        }
    }

    static async createGitignoreFile(projectDir: string, projectType: string, language: string, dependencies: string[]): Promise<void> {
        const spinner = ora('Creating .gitignore file...').start();

        const gitignoreContent = `
# Node modules
node_modules

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

# Dependency directories
jspm_packages/

# Build output
dist/
build/
public/
output/

# TypeScript
*.tsbuildinfo

# Static folder for Next.js
/static

# Angular build files
angular.json
*.angular-cli.json
*.aot.ts
*.aot.metadata.json

# Miscellaneous
.DS_Store
.env
*.env.local
*.env.development.local
*.env.test.local
*.env.production.local

# Testing
/coverage

# Tailwind CSS
tailwind.config.js
postcss.config.js
        `;

        try {
            await fs.writeFile(join(projectDir, '.gitignore'), gitignoreContent);
            spinner.succeed('.gitignore file created successfully');
        } catch (error: any) {
            spinner.fail('Error creating .gitignore file');
            throw new Error(`Error creating .gitignore file: ${error.message}`);
        }
    }
}
