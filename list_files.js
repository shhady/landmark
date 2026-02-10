const fs = require('fs');
const path = require('path');

const projectsDir = path.join(process.cwd(), 'public', 'projects');

function getFiles(dir) {
  const subdirs = fs.readdirSync(dir);
  const files = [];
  subdirs.forEach(subdir => {
    const res = path.resolve(dir, subdir);
    if (fs.statSync(res).isDirectory()) {
      const dirFiles = fs.readdirSync(res);
      dirFiles.forEach(file => {
        if (file.toLowerCase().endsWith('.pdf')) {
           console.log(path.join(subdir, file));
        }
      });
    }
  });
  return files;
}

try {
    getFiles(projectsDir);
} catch (e) {
    console.error(e);
}
