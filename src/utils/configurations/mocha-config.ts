import { promises as fs } from 'fs';
import { join } from 'path';

export async function generateMochaConfig(projectDir: string, projectType: string): Promise<void> {
    let mochaConfig = `
{
  "require": ["ts-node/register"],
  "extension": ["ts"],
  "spec": "test/**/*.spec.ts"
}
`;

    if (projectType === 'React' || projectType === 'Vue.js') {
        mochaConfig = `
{
  "require": ["ts-node/register"],
  "extension": ["ts"],
  "spec": "test/**/*.spec.ts",
  "timeout": 5000,
  "ui": "bdd",
  "reporter": "spec"
}
`;
    }

    await fs.writeFile(join(projectDir, '.mocharc.json'), mochaConfig);

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
