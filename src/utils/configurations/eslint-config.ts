import { promises as fs } from 'fs';
import { join } from 'path';

export async function generateESLintConfig(projectDir: string): Promise<void> {
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
