import { promises as fs } from 'fs';
import { join } from 'path';

export async function generateJestConfig(projectDir: string, projectType: string): Promise<void> {
    let jestConfig;

    switch (projectType) {
        case 'React':
            jestConfig = `
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
`;
            const setupTestsContent = `
import '@testing-library/jest-dom/extend-expect';
`;
            await fs.writeFile(join(projectDir, 'src/setupTests.ts'), setupTestsContent);
            break;
        case 'Vue.js':
            jestConfig = `
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'vue'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
`;
            break;
        case 'Node.js':
            jestConfig = `
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
`;
            break;
        default:
            jestConfig = `
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
`;
            break;
    }

    await fs.writeFile(join(projectDir, 'jest.config.js'), jestConfig);

    const packageJsonPath = join(projectDir, 'package.json');
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
    packageJson.scripts = {
        ...packageJson.scripts,
        test: 'jest',
    };
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
}
