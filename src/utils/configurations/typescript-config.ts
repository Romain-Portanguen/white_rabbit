import { resolve } from 'path';
import FileSystemInterface from '../../@types/utils/file-system';

export async function generateTypeScriptConfig(projectDir: string, fileSystem: FileSystemInterface): Promise<void> {
    const tsconfigContent = {
        "compilerOptions": {
            "target": "ES6",
            "module": "commonjs",
            "strict": true,
            "esModuleInterop": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true
        },
        "include": ["src/**/*.ts"],
        "exclude": ["node_modules"]
    };

    const tsconfigPath = resolve(projectDir, 'tsconfig.json');
    await fileSystem.writeFile(tsconfigPath, JSON.stringify(tsconfigContent, null, 2));

    const packageJsonPath = resolve(projectDir, 'package.json');
    const packageJsonContent = await fileSystem.readFile(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);

    packageJson.scripts = {
        ...packageJson.scripts,
        "build": "tsc",
        "start": "ts-node src/index.ts",
        "dev": "ts-node-dev src/index.ts"
    };

    await fileSystem.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
}
