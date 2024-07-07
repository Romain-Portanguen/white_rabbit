import { resolve } from 'path';
import CommandExecutorInterface from '../../@types/utils/command-executor';

export async function createNodeJsProject(
    projectDir: string,
    commandExecutor: CommandExecutorInterface
): Promise<void> {
    const absoluteProjectDir = resolve(projectDir);
    const command = `npx express-generator ${absoluteProjectDir}`;
    await commandExecutor.execute(command);
}
