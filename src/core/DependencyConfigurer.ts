import { exec } from 'child_process';
import { promises as fs } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default class DependencyConfigurer {
    static async configureDependencies(projectDir: string, dependencies: string[], language: string): Promise<void> {
        const srcDir = join(projectDir, 'src');

        if (dependencies.includes('tailwindcss')) {
            try {
                await execAsync(`npx tailwindcss init -p`, { cwd: projectDir });

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
                console.log('Tailwind CSS configured successfully');
              } catch (error: any) {
                  throw new Error(`Error configuring Tailwind CSS: ${error.message}`);
              }
        }
    }
}
