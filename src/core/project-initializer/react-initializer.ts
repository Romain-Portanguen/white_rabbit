import { execaCommand } from 'execa';
import { resolve } from 'path';

export async function createReactProject(projectDir: string, language: string): Promise<void> {
    const absoluteProjectDir = resolve(projectDir);
    const command = language === 'TypeScript'
        ? `npx create-react-app ${absoluteProjectDir} --template typescript`
        : `npx create-react-app ${absoluteProjectDir}`;
    await execaCommand(command);
}
