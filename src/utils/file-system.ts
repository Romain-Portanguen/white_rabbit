import { promises as fs } from 'fs';
import FileSystemInterface from '../@types/utils/file-system';

export class FileSystem implements FileSystemInterface {
    public async writeFile(path: string, data: string): Promise<void> {
        await fs.writeFile(path, data);
    }

    public async appendFile(path: string, data: string): Promise<void> {
        await fs.appendFile(path, data);
    }
}
