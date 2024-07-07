import { execaCommand } from 'execa';
import CommandExecutorInterface from '../@types/utils/command-executor';

export class CommandExecutor implements CommandExecutorInterface {
    public async execute(command: string, cwd: string): Promise<void> {
        await execaCommand(command, { cwd });
    }
}
