import { execaCommand } from 'execa';
import { resolve } from 'path';

export async function createNodeJsProject(projectDir: string): Promise<void> {
    const absoluteProjectDir = resolve(projectDir);
    const command = `npx express-generator ${absoluteProjectDir}`;
    await execaCommand(command);
}
