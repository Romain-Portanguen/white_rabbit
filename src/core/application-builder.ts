import ProjectInitializer from './project-initializer.js';
import DependencyInstaller from './dependency-installer.js';
import DependencyConfigurer from './dependency-configurer.js';
import GitInitializer from './git-initializer.js';
import ConfigurationGenerator from '../utils/configuration.js';
import { Answers } from '../@types/answers.js';
import { join } from 'path';
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
            formattingTools
        } = answers;

        const projectDir = join(destination, projectName);

        console.log(`Initializing ${language} ${projectType} project: ${projectName} at ${projectDir}`);

        const spinner = ora('Setting up your project...').start();

        try {
            await ProjectInitializer.createProject(projectDir, projectType, language);

            await Promise.all([
                DependencyInstaller.installDependencies(dependencies, packageManager, projectDir),
                DependencyConfigurer.configureDependencies(projectDir, dependencies, language)
            ]);

            if (initializeGit) {
                await GitInitializer.initializeGitRepository(projectDir);
                await GitInitializer.createGitignoreFile(projectDir, projectType, language, dependencies);
            }

            if (lintingTools.includes('ESLint')) {
                await ConfigurationGenerator.generateESLintConfig(projectDir);
            }

            if (formattingTools.includes('Prettier')) {
                await ConfigurationGenerator.generatePrettierConfig(projectDir);
            }

            spinner.succeed('Project setup completed.');
            process.chdir(projectDir);
            console.log(`You are now in the project directory: ${process.cwd()}`);

        } catch (error: any) {
            spinner.fail(`Error setting up project: ${error.message}`);
            throw new Error(`Error setting up project: ${error.message}`);
        }
    }
}

export default ApplicationBuilder;
