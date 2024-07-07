import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import { spawn } from 'child_process';

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

    const uglify = spawn('npx', ['uglify-js', fullFilePath, '--compress', '--mangle', '-o', fullOutFilePath]);

    uglify.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    uglify.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    uglify.on('close', (code) => {
      if (code !== 0) {
        console.error(`Minification process exited with code ${code}`);
        return;
      }

      console.log(`Minified ${fullFilePath}`);

      fs.unlinkSync(fullFilePath);
      console.log(`Deleted original file: ${fullFilePath}`);
      
      fs.renameSync(fullOutFilePath, fullFilePath);
      console.log(`Renamed minified file: ${fullOutFilePath} to ${fullFilePath}`);
    });
  }
}

minifyAllFiles();
