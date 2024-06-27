import { execa } from 'execa';
import { promises as fs } from 'fs';
import { join } from 'path';
import ora from 'ora';

export default class DependencyConfigurer {
    static async configureDependencies(projectDir: string, dependencies: string[], language: string): Promise<void> {
        const srcDir = join(projectDir, 'src');

        if (dependencies.includes('tailwindcss')) {
            const spinner = ora('Configuring Tailwind CSS...').start();

            try {
                await execa('npx', ['tailwindcss', 'init', '-p'], { cwd: projectDir });

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

                await fs.writeFile(join(projectDir, 'tailwind.config.js'), tailwindConfig);

                const postcssConfig = `
                  module.exports = {
                    plugins: {
                      tailwindcss: {},
                      autoprefixer: {},
                    },
                  };
                `;

                await fs.writeFile(join(projectDir, 'postcss.config.js'), postcssConfig);

                const indexCssPath = join(srcDir, 'index.css');
                const indexCssContent = `
                  @tailwind base;
                  @tailwind components;
                  @tailwind utilities;
                `;

                await fs.appendFile(indexCssPath, indexCssContent);
                spinner.succeed('Tailwind CSS configured successfully');
            } catch (error) {
                spinner.fail('Error configuring Tailwind CSS');
                throw error;
            }
        }
    }
}
