import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, extname } from 'path';

const directory = 'dist';
const fileExtension = '.js';

function addJsExtensions(dir) {
  const files = readdirSync(dir);

  files.forEach(file => {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      addJsExtensions(fullPath);
    } else if (stat.isFile() && extname(fullPath) === '.js') {
      let content = readFileSync(fullPath, 'utf8');
      content = content.replace(/from '(\..*)'/g, (match, p1) => `from '${p1}.js'`);
      writeFileSync(fullPath, content, 'utf8');
    }
  });
}

addJsExtensions(directory);
