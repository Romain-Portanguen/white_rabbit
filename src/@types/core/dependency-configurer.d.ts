export default interface DependencyConfigurerInterface {
  configureDependencies(projectDir: string, dependencies: string[], language: string): Promise<void>;
}
