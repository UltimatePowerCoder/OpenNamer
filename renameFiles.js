const fs = require('fs');
const path = require('path');

// Укажите путь к вашей папке
const folderPath = '/path/to/your/folder';

// Укажите паттерн, который нужно удалить из имен файлов
const patternToRemove = 'PATTERN';

// Функция для переименования файлов
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
                    // Если это папка, рекурсивно обходим её содержимое
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

// Запуск функции для переименования файлов в указанной папке
renameFilesInFolder(folderPath);
