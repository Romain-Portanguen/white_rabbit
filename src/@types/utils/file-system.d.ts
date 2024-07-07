export default interface FileSystemInterface {
  writeFile(path: string, data: string): Promise<void>;
  appendFile(path: string, data: string): Promise<void>;
  mkdir?(path: string, options?: object): Promise<void>;
  access?(path: string): Promise<void>;
}
