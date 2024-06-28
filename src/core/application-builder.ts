import { createProject } from '../project-initializer/index.js';
import DependencyInstaller from './dependency-installer.js';
import DependencyConfigurer from './dependency-configurer.js';
import GitInitializer from './git-initializer.js';
import ConfigurationGenerator from '../utils/configuration.js';
import { Answers } from '../@types/answers.js';
import { join } from 'path';
import { promises as fs } from 'fs';
import ora from 'ora';

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
                    await ConfigurationGenerator.generateESLintConfig(projectDir);
                }
            }

            if (answers.installFormattingTools && formattingTools) {
                if (formattingTools.length > 0) {
                    await ConfigurationGenerator.generatePrettierConfig(projectDir);
                }
            }

            if (answers.installTestingTools && testingTools) {
                if (testingTools.length > 0) {
                    await DependencyInstaller.installDependencies(testingTools, packageManager, projectDir);
                    await this.configureTestingTools(testingTools, projectDir);
                }
            }

            if (initializeGit) {
                await this.setupGit(projectDir, projectType, language, dependencies || []);
            }

            spinner.succeed('Project setup completed.');
            await this.changeToProjectDirectory(projectDir);

        } catch (error: any) {
            spinner.fail(`Error setting up project: ${error.message}`);
            throw new Error(`Error setting up project: ${error.message}`);
        }
    }

    private async configureTestingTools(testingTools: string[], projectDir: string): Promise<void> {
        if (testingTools.includes('Jest')) {
            await ConfigurationGenerator.generateJestConfig(projectDir);
        }
        if (testingTools.includes('Mocha') || testingTools.includes('Chai')) {
            await ConfigurationGenerator.generateMochaConfig(projectDir);
        }
        if (testingTools.includes('Testing Library')) {
            await ConfigurationGenerator.generateTestingLibraryConfig(projectDir);
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
            console.log(`You are now in the project directory: ${process.cwd()}`);
        } catch (error: any) {
            console.error(`Error changing directory: ${error.message}`);
            throw new Error(`Error changing directory: ${error.message}`);
        }
    }
}

export default ApplicationBuilder;
