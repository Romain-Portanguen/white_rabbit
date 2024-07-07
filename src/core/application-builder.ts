import ora from 'ora';
import { createProject } from './project-initializer/index';
import { generateESLintConfig } from '../utils/configurations/eslint-config';
import { generatePrettierConfig } from '../utils/configurations/prettier-config';
import { generateJestConfig } from '../utils/configurations/jest-config';
import { generateMochaConfig } from '../utils/configurations/mocha-config';
import { generateTestingLibraryConfig } from '../utils/configurations/testing-library-config';
import { Answers } from '../@types/common/answers';
import { join } from 'path';
import { runAngularCLI } from './project-initializer/angular-initializer';
import DependencyInstallerInterface from '../@types/core/dependency-installer';
import DependencyConfigurerInterface from '../@types/core/dependency-configurer';
import GitInitializerInterface from '../@types/core/git-initializer';
import ApplicationBuilderInterface from '../@types/core/application-builder';
import CommandExecutorInterface from '../@types/utils/command-executor';
import FileSystemInterface from '../@types/utils/file-system';

class ApplicationBuilder implements ApplicationBuilderInterface {
    private dependencyInstaller: DependencyInstallerInterface;
    private dependencyConfigurer: DependencyConfigurerInterface;
    private gitInitializer: GitInitializerInterface;
    private commandExecutor: CommandExecutorInterface;
    private fileSystem: FileSystemInterface;

    constructor(
        dependencyInstaller: DependencyInstallerInterface,
        dependencyConfigurer: DependencyConfigurerInterface,
        gitInitializer: GitInitializerInterface,
        commandExecutor: CommandExecutorInterface,
        fileSystem: FileSystemInterface
    ) {
        this.dependencyInstaller = dependencyInstaller;
        this.dependencyConfigurer = dependencyConfigurer;
        this.gitInitializer = gitInitializer;
        this.commandExecutor = commandExecutor;
        this.fileSystem = fileSystem;
    }

    public async buildApplication(answers: Answers): Promise<void> {
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

        if (projectType === 'Angular') {
            console.log(`Initializing Angular project: ${projectName} at ${projectDir}`);
            try {
                await runAngularCLI(answers, this.commandExecutor);
            } catch (error) {
                console.error('Error setting up Angular project:', error);
                throw error;
            }
            return;
        }

        const spinner = ora('Setting up your project...').start();

        try {
            await createProject(projectDir, projectType, language, this.commandExecutor, this.fileSystem);

            if (answers.installDependencies && dependencies) {
                const filteredDependencies = dependencies.filter(dep => dep !== 'none');
                if (filteredDependencies.length > 0) {
                    await this.dependencyInstaller.installDependencies(filteredDependencies, packageManager, projectDir);
                }

                await this.dependencyConfigurer.configureDependencies(projectDir, filteredDependencies, language);
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
                    await this.configureTestingTools(testingTools, packageManager, projectDir, projectType);
                }
            }            

            if (initializeGit) {
                await this.gitInitializer.initializeGitRepository(projectDir);
                await this.gitInitializer.createGitignoreFile(projectDir, projectType, language, dependencies || []);
            }

            spinner.succeed('Project setup completed.');
            await this.changeToProjectDirectory(projectDir);

        } catch (error: any) {
            spinner.fail(`Error setting up project: ${error.message}`);
            throw new Error(`Error setting up project: ${error.message}`);
        }
    }

    private async configureTestingTools(testingTools: string[], packageManager: string, projectDir: string, projectType: string): Promise<void> {
        const testingDependenciesMap: { [key: string]: string[] } = {
            'jest': ['jest', 'ts-jest', '@types/jest'],
            'mocha': ['mocha', 'chai', '@types/mocha', '@types/chai', 'ts-node'],
            '@testing-library/react': ['@testing-library/react', '@testing-library/jest-dom', '@testing-library/user-event']
        };
    
        for (const tool of testingTools) {
            const dependenciesToInstall = testingDependenciesMap[tool];
            if (dependenciesToInstall) {
                await this.dependencyInstaller.installDependencies(dependenciesToInstall, packageManager, projectDir);
                if (tool === 'jest') {
                    await generateJestConfig(projectDir, projectType);
                } else if (tool === 'mocha') {
                    await generateMochaConfig(projectDir, projectType);
                } else if (tool === '@testing-library/react') {
                    await generateTestingLibraryConfig(projectDir, projectType);
                }
            }
        }
    }

    private async changeToProjectDirectory(projectDir: string): Promise<void> {
        try {
            if (this.fileSystem.access) {
                await this.fileSystem.access(projectDir);
            }
            process.chdir(projectDir);
            console.log(`You are now in the project directory: ${process.cwd()}`);
        } catch (error: any) {
            console.error(`Error changing directory: ${error.message}`);
            throw new Error(`Error changing directory: ${error.message}`);
        }
    } 
}

export default ApplicationBuilder;
