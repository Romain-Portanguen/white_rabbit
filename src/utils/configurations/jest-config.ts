import { promises as fs } from 'fs';
import { join } from 'path';

export async function generateJestConfig(projectDir: string): Promise<void> {
    const jestConfig = `
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
`;

    await fs.writeFile(join(projectDir, 'jest.config.js'), jestConfig);
}
