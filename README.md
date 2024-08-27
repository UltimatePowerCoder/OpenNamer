# Batch File Renamer

A Node.js script for recursively renaming files by removing a specified pattern from their filenames. This script is useful for quickly processing large directories with multiple levels of subdirectories.

## Features

- **Recursive Renaming**: Automatically processes all files within a folder and its subfolders.
- **Pattern Matching**: Removes a specified pattern from filenames.
- **Cross-Platform**: Works on any platform that supports Node.js (Windows, macOS, Linux).

## How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/batch-file-renamer.git
    ```

2. **Navigate to the directory**:
    ```bash
    cd batch-file-renamer
    ```

3. **Install Node.js (if not already installed)**:
    - [Download Node.js](https://nodejs.org/) and install it on your machine.

4. **Edit the script**:
    - Open `renameFiles.js` and update the `folderPath` and `patternToRemove` variables with your desired folder and pattern.

5. **Run the script**:
    ```bash
    node renameFiles.js
    ```

## Example

If you have files named `example-PATTERN.txt`, `anotherPATTERNfile.jpg` in a directory, running the script with `patternToRemove = 'PATTERN'` will rename them to `example-.txt`, `anotherfile.jpg`.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
