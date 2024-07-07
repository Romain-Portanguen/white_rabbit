import { execaCommand } from 'execa';
import ora from 'ora';
import { join } from 'path';
import GitInitializerInterface from '../@types/core/git-initializer';
import CommandExecutorInterface from '../@types/utils/command-executor';
import FileSystemInterface from '../@types/utils/file-system';

class GitInitializer implements GitInitializerInterface {
    private commandExecutor: CommandExecutorInterface;
    private fileSystem: FileSystemInterface;

    constructor(commandExecutor: CommandExecutorInterface, fileSystem: FileSystemInterface) {
        this.commandExecutor = commandExecutor;
        this.fileSystem = fileSystem;
    }

    public async initializeGitRepository(projectDir: string): Promise<void> {
        const spinner = ora('Initializing Git repository...').start();

        try {
            await this.commandExecutor.execute('git --version', projectDir);
            await this.commandExecutor.execute('git init', projectDir);
            spinner.succeed('Git repository initialized successfully');
        } catch (error: any) {
            spinner.fail(`Error initializing Git repository: ${error.message}`);
            throw new Error(`Error initializing Git repository: ${error.message}`);
        }
    }

    public async createGitignoreFile(projectDir: string, projectType: string, language: string, dependencies: string[]): Promise<void> {
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
            await this.fileSystem.writeFile(join(projectDir, '.gitignore'), gitignoreContent);
            spinner.succeed('.gitignore file created successfully');
        } catch (error: any) {
            spinner.fail('Error creating .gitignore file');
            throw new Error(`Error creating .gitignore file: ${error.message}`);
        }
    }
}

export default GitInitializer;
