import path from 'path';
import { promises as fs } from 'fs';
import Logger from './logger';

const USE_COLORS = true;
const logger = new Logger(USE_COLORS);

export const getDirectorySuggestions = async (input: string): Promise<string[]> => {
    input = input || '.';
    try {
        const files = await fs.readdir(path.resolve(input));
        const directories = await Promise.all(
            files.map(async (file) => {
                const fullPath = path.join(input, file);
                try {
                    const fileStat = await fs.stat(fullPath);
                    if (fileStat.isDirectory() && !['node_modules', '.git', '.idea', 'dist', 'build'].includes(file)) {
                        return fullPath;
                    }
                } catch (error: any) {
                    logger.error(`Error reading file stats for ${fullPath}: ${error.message}`);
                }
                return null;
            })
        );
        return directories.filter((dir) => dir !== null) as string[];
    } catch (error: any) {
        logger.error(`Error reading directory ${input}: ${error.message}`);
        return [];
    }
};
