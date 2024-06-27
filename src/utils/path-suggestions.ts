import path from 'path';
import fs from 'fs';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

export const getDirectorySuggestions = async (input: string): Promise<string[]> => {
    input = input || '.';
    try {
        const files = await readdir(path.resolve(input));
        const directories = await Promise.all(
            files.map(async (file) => {
                const fullPath = path.join(input, file);
                const fileStat = await stat(fullPath);
                if (fileStat.isDirectory() && !['node_modules', '.git', '.idea', 'dist', 'build'].includes(file)) {
                    return fullPath;
                }
                return null;
            })
        );
        return directories.filter((dir) => dir !== null) as string[];
    } catch (err) {
        return [];
    }
};
