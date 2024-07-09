import { resolve } from 'path';
import FileSystemInterface from '../../@types/utils/file-system';

export async function generateTypeScriptConfig(
    projectDir: string,
    fileSystem: FileSystemInterface,
    isVueProject: boolean = false
): Promise<void> {
    const tsconfigContent = isVueProject ? {
        "extends": "@vue/tsconfig/tsconfig.json",
        "compilerOptions": {
            "composite": true,
            "verbatimModuleSyntax": true
        },
        "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
        "references": [
            {
                "path": "./tsconfig.node.json"
            }
        ]
    } : {
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

    if (isVueProject) {
        const tsconfigNodeContent = {
            "compilerOptions": {
                "composite": true,
                "module": "ESNext",
                "moduleResolution": "Node",
                "allowSyntheticDefaultImports": true
            },
            "include": ["vite.config.ts"]
        };

        const tsconfigNodePath = resolve(projectDir, 'tsconfig.node.json');
        await fileSystem.writeFile(tsconfigNodePath, JSON.stringify(tsconfigNodeContent, null, 2));
    }

    const packageJsonPath = resolve(projectDir, 'package.json');
    const packageJsonContent = await fileSystem.readFile(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);

    packageJson.scripts = {
        ...packageJson.scripts,
        "build": "tsc",
        "start": isVueProject ? "vite" : "ts-node src/index.ts",
        "dev": isVueProject ? "vite" : "ts-node-dev src/index.ts"
    };

    await fileSystem.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
}
