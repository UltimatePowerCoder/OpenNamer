# Open Namer

Open Namer is a versatile file renaming tool designed to simplify the process of managing file names across directories. Built with Node.js and Electron, it offers advanced features such as recursive renaming, text replacement, and more. Now packaged with an NSIS installer for a seamless Windows installation experience.

## Features

- **Recursive Renaming**: Automatically processes all files and folders within a selected directory, including subdirectories.
- **Text Replacement**: Replace one text pattern with another in filenames.
- **Text Addition**: Optionally prepend or append text to filenames in the selected directory.
- **Pattern Removal**: Remove specified patterns from filenames.
- **Customizable Installation**: NSIS installer allows you to choose the installation directory and includes application and uninstaller icons.
- **Cross-Platform**: Developed with Electron for cross-platform support, including Windows, macOS, and Linux (installation on non-Windows platforms requires manual setup).

## Installation

### For Windows Users

1. **Download the Installer**:
   - Visit the [Releases page](https://github.com/UltimatePowerCoder/OpenNamer/releases) and download the latest Windows installer.

2. **Run the Installer**:
   - Follow the on-screen instructions to install Open Namer on your system.

3. **Launch the Application**:
   - After installation, you can find Open Namer in your Start menu or desktop shortcut.

### For Developers and Other Platforms

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/UltimatePowerCoder/open-namer.git
    ```

2. **Navigate to the Directory**:
    ```bash
    cd open-namer
    ```

3. **Install Node.js (if not already installed)**:
    - [Download Node.js](https://nodejs.org/) and install it on your machine.

4. **Install Dependencies**:
    ```bash
    npm install
    ```

5. **Build and Run**:
    ```bash
    npm start
    ```

6. **Edit the Configuration**:
    - Open the application and configure the `folderPath`, `textToReplace`, and `textToAdd` settings via the GUI.

## Example Usage

1. **Rename Files**:
   - Open Open Namer and select the target directory.
   - Use the options to remove patterns, replace text, or add text to filenames.
   - Apply the changes to process all files and folders within the directory.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests. For guidelines, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
