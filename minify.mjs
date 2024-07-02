import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import { exec as execCallback } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(execCallback);

console.log('Starting minification process with UglifyJS...');

async function minifyAllFiles() {
  const files = globSync('dist/**/*.js');
  if (files.length === 0) {
    console.error('No JavaScript files found in the dist directory.');
    return;
  }

  console.log(`Found ${files.length} JavaScript files to minify.`);
  for (const file of files) {
    const fullFilePath = path.resolve(file);
    const fullOutFilePath = fullFilePath.replace('.js', '.min.js');

    if (!fs.existsSync(fullFilePath)) {
      console.error(`Source file does not exist: ${fullFilePath}`);
      continue;
    }

    console.log(`Minifying ${fullFilePath} to ${fullOutFilePath}`);
    const cmd = `npx uglify-js ${fullFilePath} --compress --mangle -o ${fullOutFilePath}`;
    try {
      const { stdout, stderr } = await execAsync(cmd);
      if (stderr) {
        console.error(`Error minifying ${fullFilePath}: ${stderr}`);
        continue;
      }
      console.log(`Minified ${fullFilePath}: ${stdout}`);
      
      fs.unlinkSync(fullFilePath);
      console.log(`Deleted original file: ${fullFilePath}`);
      
      fs.renameSync(fullOutFilePath, fullFilePath);
      console.log(`Renamed minified file: ${fullOutFilePath} to ${fullFilePath}`);
      
    } catch (execError) {
      console.error(`Minification error for ${fullFilePath}:`, execError);
    }
  }
}

minifyAllFiles();
