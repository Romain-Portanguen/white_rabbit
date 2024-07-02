export default interface GitInitializerInterface {
  initializeGitRepository(projectDir: string): Promise<void>;
  createGitignoreFile(projectDir: string, projectType: string, language: string, dependencies: string[]): Promise<void>;
}
