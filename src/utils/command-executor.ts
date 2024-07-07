import { execaCommand, StdioOption } from 'execa';
import CommandExecutorInterface from '../@types/utils/command-executor';

export class CommandExecutor implements CommandExecutorInterface {
    public async execute(command: string, options?: { cwd?: string; stdio?: 'pipe' | 'ignore' | 'inherit' | readonly StdioOption[] }): Promise<void> {
        await execaCommand(command, options);
    }
}
