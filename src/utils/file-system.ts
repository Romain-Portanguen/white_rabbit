import { promises as fs } from 'fs';
import FileSystemInterface from '../@types/utils/file-system';

export class FileSystem implements FileSystemInterface {
    public async writeFile(path: string, data: string): Promise<void> {
        await fs.writeFile(path, data);
    }

    public async appendFile(path: string, data: string): Promise<void> {
        await fs.appendFile(path, data);
    }

    public async mkdir(path: string, options?: object): Promise<void> {
        await fs.mkdir(path, options);
    }

    public async access(path: string): Promise<void> {
        await fs.access(path);
    }

    public async readdir(path: string): Promise<string[]> {
        return await fs.readdir(path);
    }

    public async stat(path: string): Promise<{ isDirectory(): boolean }> {
        return await fs.stat(path);
    }

    public async readFile(path: string, encoding: BufferEncoding): Promise<string> {
        return await fs.readFile(path, encoding);
    }
}
