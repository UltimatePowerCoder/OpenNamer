const { ipcRenderer } = require('electron');
const path = require('path');
const fs = require('fs');

document.getElementById('browseBtn').addEventListener('click', async () => {
    const folderPath = await ipcRenderer.invoke('dialog:openFile');
    if (folderPath && folderPath.length > 0) {
        document.getElementById('folderPath').value = folderPath[0];
    }
});

document.getElementById('browseBtn2').addEventListener('click', async () => {
    const folderPath = await ipcRenderer.invoke('dialog:openFile');
    if (folderPath && folderPath.length > 0) {
        document.getElementById('folderPath2').value = folderPath[0];
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

document.getElementById('replaceBtn').addEventListener('click', () => {
    const directory = document.getElementById('folderPath2').value;
    const searchText = document.getElementById('searchText').value;
    const replaceText = document.getElementById('replaceText').value;

    if (directory && searchText && replaceText) {
        findAndReplace(directory, searchText, replaceText);
    } else {
        document.getElementById('output2').textContent = 'Please enter directory path, search text, and replace text.';
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

function findAndReplace(directory, searchText, replaceText) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            document.getElementById('output2').textContent = `Error reading directory: ${directory}`;
            return;
        }

        files.forEach((file) => {
            const oldPath = path.join(directory, file);

            fs.stat(oldPath, (err, stats) => {
                if (err) {
                    document.getElementById('output2').textContent = `Error getting file stats: ${oldPath}`;
                    return;
                }

                if (stats.isDirectory()) {
                    findAndReplace(oldPath, searchText, replaceText);
                } else if (stats.isFile()) {
                    if (file.includes(searchText)) {
                        const newFileName = file.replace(searchText, replaceText);
                        const newPath = path.join(directory, newFileName);

                        fs.rename(oldPath, newPath, (err) => {
                            if (err) {
                                document.getElementById('output2').textContent += `Error renaming file: ${oldPath}\n`;
                            } else {
                                document.getElementById('output2').textContent += `Renamed: ${oldPath} -> ${newPath}\n`;
                            }
                        });
                    }
                }
            });
        });
    });
}
