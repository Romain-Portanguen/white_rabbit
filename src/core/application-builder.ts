import { createProject } from './project-initializer/index.js';
import { generateESLintConfig } from '../utils/configurations/eslint-config.js';
import { generatePrettierConfig } from '../utils/configurations/prettier-config.js';
import { generateJestConfig } from '../utils/configurations/jest-config.js';
import { generateMochaConfig } from '../utils/configurations/mocha-config.js';
import { generateTestingLibraryConfig } from '../utils/configurations/testing-library-config.js';
import DependencyInstaller from './dependency-installer.js';
import DependencyConfigurer from './dependency-configurer.js';
import GitInitializer from './git-initializer.js';
import { Answers } from '../@types/answers.js';
import { join } from 'path';
import ora from 'ora';
import { promises as fs } from 'fs';

class ApplicationBuilder {
    async buildApplication(answers: Answers): Promise<void> {
        const { 
            projectName,
            projectType,
            language,
            dependencies,
            packageManager,
            initializeGit,
            destination,
            lintingTools,
            formattingTools,
            testingTools
        } = answers;

        const projectDir = join(destination, projectName);

        console.log(`Initializing ${language} ${projectType} project: ${projectName} at ${projectDir}`);

        const spinner = ora('Setting up your project...').start();

        try {
            await createProject(projectDir, projectType, language);

            if (answers.installDependencies && dependencies) {
                const filteredDependencies = dependencies.filter(dep => dep !== 'none');
                if (filteredDependencies.length > 0) {
                    await DependencyInstaller.installDependencies(filteredDependencies, packageManager, projectDir);
                }

                await DependencyConfigurer.configureDependencies(projectDir, filteredDependencies, language);
            }

            if (answers.installLintingTools && lintingTools) {
                if (lintingTools.length > 0) {
                    await generateESLintConfig(projectDir);
                }
            }

            if (answers.installFormattingTools && formattingTools) {
                if (formattingTools.length > 0) {
                    await generatePrettierConfig(projectDir);
                }
            }

            if (answers.installTestingTools && testingTools) {
                if (testingTools.length > 0) {
                    await this.configureTestingTools(testingTools, packageManager, projectDir);
                }
            }

            if (initializeGit && projectType !== 'Angular') {
                await this.setupGit(projectDir, projectType, language, dependencies || []);
            }

            spinner.succeed('Project setup completed.');
            await this.changeToProjectDirectory(projectDir);

        } catch (error: any) {
            spinner.fail(`Error setting up project: ${error.message}`);
            throw new Error(`Error setting up project: ${error.message}`);
        }
    }

    private async configureTestingTools(testingTools: string[], packageManager: string, projectDir: string): Promise<void> {
        const testingDependenciesMap: { [key: string]: string[] } = {
            'jest': ['jest', 'ts-jest', '@types/jest'],
            'mocha': ['mocha', 'chai', '@types/mocha', '@types/chai', 'ts-node'],
            '@testing-library/react': ['@testing-library/react', '@testing-library/jest-dom', '@testing-library/user-event']
        };

        for (const tool of testingTools) {
            const dependenciesToInstall = testingDependenciesMap[tool];
            if (dependenciesToInstall) {
                await DependencyInstaller.installDependencies(dependenciesToInstall, packageManager, projectDir);
                if (tool === 'jest') {
                    await generateJestConfig(projectDir);
                } else if (tool === 'mocha') {
                    await generateMochaConfig(projectDir);
                } else if (tool === '@testing-library/react') {
                    await generateTestingLibraryConfig(projectDir);
                }
            }
        }
    }

    private async setupGit(projectDir: string, projectType: string, language: string, dependencies: string[]): Promise<void> {
        await GitInitializer.initializeGitRepository(projectDir);

        const gitignorePath = join(projectDir, '.gitignore');
        try {
            await fs.access(gitignorePath);
            console.log('.gitignore file already exists. Keeping the existing file.');
        } catch {
            await GitInitializer.createGitignoreFile(projectDir, projectType, language, dependencies);
        }
    }

    private async changeToProjectDirectory(projectDir: string): Promise<void> {
        try {
            await fs.access(projectDir);
            process.chdir(projectDir);
            console.log(`You are now in the project directory: ${process.cwd()}`);
        } catch (error: any) {
            console.error(`Error changing directory: ${error.message}`);
            throw new Error(`Error changing directory: ${error.message}`);
        }
    }
}

export default ApplicationBuilder;
