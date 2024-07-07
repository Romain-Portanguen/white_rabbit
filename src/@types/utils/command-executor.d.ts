export default interface CommandExecutorInterface {
  execute(command: string, cwd: string): Promise<void>;
}
