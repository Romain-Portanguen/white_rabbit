import { join } from 'path';
import ora from 'ora';
import DependencyConfigurerInterface from '../@types/core/dependency-configurer';
import CommandExecutorInterface from '../@types/utils/command-executor';
import FileSystemInterface from '../@types/utils/file-system';

export default class DependencyConfigurer implements DependencyConfigurerInterface {
    private commandExecutor: CommandExecutorInterface;
    private fileSystem: FileSystemInterface;

    constructor(commandExecutor: CommandExecutorInterface, fileSystem: FileSystemInterface) {
        this.commandExecutor = commandExecutor;
        this.fileSystem = fileSystem;
    }

    public async configureDependencies(projectDir: string, dependencies: string[], language: string): Promise<void> {
        const srcDir = join(projectDir, 'src');

        if (dependencies.includes('tailwindcss')) {
            await this.configureTailwindCSS(projectDir, srcDir);
        }
    }

    private async configureTailwindCSS(projectDir: string, srcDir: string): Promise<void> {
        const spinner = ora('Configuring Tailwind CSS...').start();

        try {
            await this.commandExecutor.execute('npx tailwindcss init -p', { cwd: projectDir});

            const tailwindConfig = `
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
`;

            await this.fileSystem.writeFile(join(projectDir, 'tailwind.config.js'), tailwindConfig);

            const postcssConfig = `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`;

            await this.fileSystem.writeFile(join(projectDir, 'postcss.config.js'), postcssConfig);

            const indexCssPath = join(srcDir, 'index.css');
            const indexCssContent = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`;

            await this.fileSystem.appendFile(indexCssPath, indexCssContent);
            spinner.succeed('Tailwind CSS configured successfully');
        } catch (error) {
            spinner.fail('Error configuring Tailwind CSS');
            throw error;
        }
    }
}
