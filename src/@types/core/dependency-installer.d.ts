export default interface DependencyInstallerInterface {
  installDependencies(dependencies: string[], packageManager: string, projectDir: string): Promise<void>;
}
