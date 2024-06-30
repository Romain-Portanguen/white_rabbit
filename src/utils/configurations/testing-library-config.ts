import { promises as fs } from 'fs';
import { join } from 'path';

export async function generateTestingLibraryConfig(projectDir: string, projectType: string): Promise<void> {
    let jestConfig = `
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
`;

    if (projectType === 'Vue.js') {
        jestConfig = `
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'vue'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
`;
    }

    await fs.writeFile(join(projectDir, 'jest.config.js'), jestConfig);

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
