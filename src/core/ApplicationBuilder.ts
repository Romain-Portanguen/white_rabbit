import ProjectInitializer from './ProjectInitializer.js';
import DependencyInstaller from './DependencyInstaller.js';
import DependencyConfigurer from './DependencyConfigurer.js';
import GitInitializer from './GitInitializer.js';
import { Answers } from '../@types/Answers.js';
import { join } from 'path';

class ApplicationBuilder {
    async buildApplication(answers: Answers): Promise<void> {
        const { projectName, projectType, language, dependencies, packageManager, testingTools, lintingTools, formattingTools, additionalConfig, initializeGit, destination } = answers;

        const projectDir = join(destination, projectName);

        console.log(`Initializing ${language} ${projectType} project: ${projectName} at ${projectDir}`);

        await ProjectInitializer.createProject(projectDir, projectType, language);

        await DependencyInstaller.installDependencies(dependencies, packageManager, projectDir);

        await DependencyConfigurer.configureDependencies(projectDir, dependencies, language);

        if (initializeGit) {
            await GitInitializer.initializeGitRepository(projectDir);
        }

        await GitInitializer.createGitignoreFile(projectDir, projectType, language, dependencies);

        if (additionalConfig) {
            // Configure testing tools, linting tools, etc. { Feature to be added soon }
        }

        console.log(`Project ${projectName} setup completed.`);

        process.chdir(projectDir);
        console.log(`You are now in the project directory: ${process.cwd()}`);
    }
}

export default ApplicationBuilder;
