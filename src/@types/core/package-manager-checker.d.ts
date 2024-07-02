export default interface PackageManagerCheckerInterface {
  checkAvailability(packageManager: string): Promise<string>;
  isAvailable(packageManager: string): Promise<boolean>;
}
