import { exec } from 'child_process';
import { promises as fs } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default class GitInitializer {
    static async initializeGitRepository(projectDir: string): Promise<void> {
        try {
            await execAsync('git init', { cwd: projectDir });
            console.log('Git repository initialized successfully');
        } catch (error: any) {
            throw new Error(`Error initializing Git repository: ${error.message}`);
        }
    }

    static async createGitignoreFile(projectDir: string, projectType: string, language: string, dependencies: string[]): Promise<void> {
        const gitignoreContent = `
# Node modules
node_modules

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Dependency directories
jspm_packages

# Typescript
*.tsbuildinfo

# Production
/build

# Misc
.DS_Store
.env

# Testing
/coverage

# Tailwind CSS
tailwind.config.js
postcss.config.js
`;

        try {
            await fs.writeFile(join(projectDir, '.gitignore'), gitignoreContent);
            console.log('.gitignore file created successfully');
        } catch (error: any) {
            throw new Error(`Error creating .gitignore file: ${error.message}`);
        }
    }
}
