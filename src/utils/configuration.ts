import { promises as fs } from 'fs';
import { join } from 'path';

export default class ConfigurationGenerator {
    static async generateESLintConfig(projectDir: string): Promise<void> {
        const eslintConfig = {
            env: {
                browser: true,
                es2021: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:react/recommended',
                'plugin:@typescript-eslint/recommended',
                'prettier',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 12,
                sourceType: 'module',
            },
            plugins: [
                'react',
                '@typescript-eslint',
            ],
            rules: {},
        };

        const eslintContent = JSON.stringify(eslintConfig, null, 2);
        await fs.writeFile(join(projectDir, '.eslintrc.json'), eslintContent);
    }

    static async generatePrettierConfig(projectDir: string): Promise<void> {
        const prettierConfig = {
            semi: true,
            singleQuote: true,
            trailingComma: 'all',
        };

        const prettierContent = JSON.stringify(prettierConfig, null, 2);
        await fs.writeFile(join(projectDir, '.prettierrc.json'), prettierContent);
    }

    static async generateJestConfig(projectDir: string): Promise<void> {
        const jestConfig = {
            preset: 'ts-jest',
            testEnvironment: 'node',
            testPathIgnorePatterns: ['/node_modules/', '/dist/'],
        };

        const jestContent = JSON.stringify(jestConfig, null, 2);
        await fs.writeFile(join(projectDir, 'jest.config.js'), jestContent);

        const packageJsonPath = join(projectDir, 'package.json');
        const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
        packageJson.scripts = {
            ...packageJson.scripts,
            test: 'jest',
        };
        await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
    }

    static async generateMochaConfig(projectDir: string): Promise<void> {
        const mochaConfig = {
            require: ['ts-node/register'],
            extension: ['ts'],
            spec: 'test/**/*.spec.ts',
        };

        const mochaContent = JSON.stringify(mochaConfig, null, 2);
        await fs.writeFile(join(projectDir, '.mocharc.json'), mochaContent);

        const packageJsonPath = join(projectDir, 'package.json');
        const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
        packageJson.scripts = {
            ...packageJson.scripts,
            test: 'mocha',
        };
        await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));

        const testDir = join(projectDir, 'test');
        await fs.mkdir(testDir, { recursive: true });
        const sampleTest = `
            import { expect } from 'chai';

            describe('Sample Test', () => {
                it('should pass', () => {
                    expect(true).to.be.true;
                });
            });
        `;
        await fs.writeFile(join(testDir, 'sample.spec.ts'), sampleTest);
    }

    static async generateTestingLibraryConfig(projectDir: string): Promise<void> {
        const jestConfig = {
            preset: 'ts-jest',
            testEnvironment: 'jsdom',
            setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
            testPathIgnorePatterns: ['/node_modules/', '/dist/'],
        };

        const jestContent = JSON.stringify(jestConfig, null, 2);
        await fs.writeFile(join(projectDir, 'jest.config.js'), jestContent);

        const setupTestsContent = `
          import '@testing-library/jest-dom/extend-expect';
        `;

        await fs.writeFile(join(projectDir, 'src/setupTests.ts'), setupTestsContent);

        const packageJsonPath = join(projectDir, 'package.json');
        const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
        packageJson.scripts = {
            ...packageJson.scripts,
            test: 'jest',
        };
        await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
    }
}
