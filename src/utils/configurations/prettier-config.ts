import { promises as fs } from 'fs';
import { join } from 'path';

export async function generatePrettierConfig(projectDir: string): Promise<void> {
    const prettierConfig = {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
    };

    const prettierContent = JSON.stringify(prettierConfig, null, 2);
    await fs.writeFile(join(projectDir, '.prettierrc.json'), prettierContent);
}
