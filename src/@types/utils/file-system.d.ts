export default interface FileSystemInterface {
  writeFile(path: string, data: string): Promise<void>;
  appendFile(path: string, data: string): Promise<void>;
  mkdir(path: string, options?: object): Promise<void>;
  access(path: string): Promise<void>;
  readdir(path: string): Promise<string[]>;
  stat(path: string): Promise<{ isDirectory(): boolean }>;
  readFile(path: string, encoding: string): Promise<string>;
}
