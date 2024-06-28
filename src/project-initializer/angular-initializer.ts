import { execaCommand } from 'execa';
import { resolve, basename } from 'path';
import { promises as fs } from 'fs';

export async function createAngularProject(projectDir: string): Promise<void> {
    const absoluteProjectDir = resolve(projectDir);
    const projectName = basename(projectDir);

    try {
        await fs.mkdir(absoluteProjectDir, { recursive: true });
        process.chdir(absoluteProjectDir);

        const command = `npx @angular/cli new ${projectName} --strict`;

        await execaCommand(command);
    } finally {
        process.chdir(absoluteProjectDir);
    }
}
