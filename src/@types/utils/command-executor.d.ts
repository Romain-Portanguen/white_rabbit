export default interface CommandExecutorInterface {
  execute(command: string, options?: { cwd?: string; stdio?: 'pipe' | 'ignore' | 'inherit' | readonly StdioOption[] }): Promise<void>;
}
