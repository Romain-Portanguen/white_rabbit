import path from 'path';
import FileSystemInterface from '../@types/utils/file-system';
import Logger from './logger';

const USE_COLORS = true;
const logger = new Logger(USE_COLORS);

export const getDirectorySuggestions = async (input: string, fileSystem: FileSystemInterface): Promise<string[]> => {
    input = input || '.';
    try {
        const files = await fileSystem.readdir(path.resolve(input));
        const directories = await Promise.all(
            files.map(async (file: string) => {
                const fullPath = path.join(input, file);
                try {
                    const fileStat = await fileSystem.stat(fullPath);
                    if (fileStat.isDirectory() && !['node_modules', '.git', '.idea', 'dist', 'build'].includes(file)) {
                        return fullPath;
                    }
                } catch (error: any) {
                    logger.error(`Error reading file stats for ${fullPath}: ${error.message}`);
                }
                return null;
            })
        );
        return directories.filter((dir: string | null) => dir !== null) as string[];
    } catch (error: any) {
        logger.error(`Error reading directory ${input}: ${error.message}`);
        return [];
    }
};
