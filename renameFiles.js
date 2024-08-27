const fs = require('fs');
const path = require('path');

const folderPath = process.argv[2];
const patternToRemove = process.argv[3];

function renameFilesInFolder(folder) {
    fs.readdir(folder, (err, files) => {
        if (err) {
            console.error(`Не удалось прочитать папку: ${folder}`, err);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(folder, file);

            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error(`Ошибка получения информации о файле: ${filePath}`, err);
                    return;
                }

                if (stats.isDirectory()) {
                    renameFilesInFolder(filePath);
                } else if (stats.isFile()) {
                    if (file.includes(patternToRemove)) {
                        const newFileName = file.replace(patternToRemove, '');
                        const newFilePath = path.join(folder, newFileName);

                        fs.rename(filePath, newFilePath, (err) => {
                            if (err) {
                                console.error(`Ошибка переименования файла: ${filePath}`, err);
                            } else {
                                console.log(`Переименован: ${filePath} -> ${newFilePath}`);
                            }
                        });
                    }
                }
            });
        });
    });
}

if (folderPath && patternToRemove) {
    renameFilesInFolder(folderPath);
} else {
    console.error('Необходимо указать путь к папке и паттерн для удаления.');
}