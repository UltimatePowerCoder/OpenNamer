const { exec } = require('child_process');

document.getElementById('renameBtn').addEventListener('click', () => {
    const folderPath = document.getElementById('folderPath').value;
    const pattern = document.getElementById('pattern').value;

    if (folderPath && pattern) {
        exec(`node renameFiles.js ${folderPath} ${pattern}`, (error, stdout, stderr) => {
            if (error) {
                document.getElementById('output').textContent = `Error: ${error.message}`;
                return;
            }
            if (stderr) {
                document.getElementById('output').textContent = `Stderr: ${stderr}`;
                return;
            }
            document.getElementById('output').textContent = stdout;
        });
    } else {
        document.getElementById('output').textContent = 'Please enter both folder path and pattern.';
    }
});
