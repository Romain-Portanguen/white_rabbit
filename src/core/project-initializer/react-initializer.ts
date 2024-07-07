import { resolve } from 'path';
import CommandExecutorInterface from '../../@types/utils/command-executor';

export async function createReactProject(
    projectDir: string,
    language: string,
    commandExecutor: CommandExecutorInterface
): Promise<void> {
    const absoluteProjectDir = resolve(projectDir);
    const command = language === 'TypeScript'
        ? `npx create-react-app ${absoluteProjectDir} --template typescript`
        : `npx create-react-app ${absoluteProjectDir}`;
    await commandExecutor.execute(command);
}
