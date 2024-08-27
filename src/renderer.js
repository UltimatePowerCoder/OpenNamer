const { ipcRenderer } = require('electron');
const path = require('path');
const fs = require('fs');

document.getElementById('browseBtn').addEventListener('click', async () => {
    const folderPath = await ipcRenderer.invoke('dialog:openFile');
    if (folderPath && folderPath.length > 0) {
        document.getElementById('folderPath').value = folderPath[0];
    }
});

document.getElementById('renameBtn').addEventListener('click', () => {
    const folderPath = document.getElementById('folderPath').value;
    const pattern = document.getElementById('pattern').value;

    if (folderPath && pattern) {
        renameFilesInFolder(folderPath, pattern);
    } else {
        document.getElementById('output').textContent = 'Please enter both folder path and pattern.';
    }
});

function renameFilesInFolder(folder, patternToRemove) {
    fs.readdir(folder, (err, files) => {
        if (err) {
            document.getElementById('output').textContent = `Error reading folder: ${folder}`;
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(folder, file);

            fs.stat(filePath, (err, stats) => {
                if (err) {
                    document.getElementById('output').textContent = `Error getting file stats: ${filePath}`;
                    return;
                }

                if (stats.isDirectory()) {
                    renameFilesInFolder(filePath, patternToRemove);
                } else if (stats.isFile()) {
                    if (file.includes(patternToRemove)) {
                        const newFileName = file.replace(patternToRemove, '');
                        const newFilePath = path.join(folder, newFileName);

                        fs.rename(filePath, newFilePath, (err) => {
                            if (err) {
                                document.getElementById('output').textContent += `Error renaming file: ${filePath}\n`;
                            } else {
                                document.getElementById('output').textContent += `Renamed: ${filePath} -> ${newFilePath}\n`;
                            }
                        });
                    }
                }
            });
        });
    });
}
