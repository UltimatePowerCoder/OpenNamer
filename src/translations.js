const translations = {
    ru: {
        main: "Главная",
        delete: "Удалить",
        replace: "Заменить",
        add: "Добавить",
        rename: "Переименовать",
        help: "Справка",
        support: "Поддержка",
        deleteTitle: "Удалить из имени",
        deleteDescription: "Выбрать папку с нужными файлами<br>Вписать повторяющийся 'паттерн' или другой символ который хотим удалить",
        replaceTitle: "Заменить в имени",
        replaceDescription: "Выбрать папку с нужными файлами<br>Вписать новый 'паттерн' для замены или другой символ который хотим заменить",
        addTitle: "Добавить к имени",
        addDescription: "Выбрать папку с нужными файлами<br>Вписать 'паттерн' для добавления. Можно добавить к началу имени или к концу",
        renameTitle: "Переименовать",
        renameDescription: "Выбрать папку с нужными файлами<br>Вписать новое имя для всех файлов. После запуска все файлы переименуются",
        start: "Начать",

        deleteTitle: "Удаление из имени",
        deleteFolderPathLabel: "Путь к папке:",
        deletePlaceholder: "Выберите путь к папке",
        deleteText: "Текст для удаления:",
        deleteStartButton: "Начать",

        replaceTitle: "Замена в именах файлов",
        replaceFolderPathLabel: "Путь к папке:",
        replaceSearchPlaceholder: "Текст для поиска",
        replaceReplacePlaceholder: "Текст для замены",
        replaceStartButton: "Начать",

        addTitle: "Добавление к имени файлов",
        addFolderPathLabel: "Путь к папке:",
        addPlaceholder: "Введите текст",
        addToStartCheckbox: "Добавить в начало",
        addToEndCheckbox: "Добавить в конец",
        addStartButton: "Начать",

        renameTitle: "Переименовать все файлы",
        renameFolderPathLabel: "Путь к папке:",
        renamePlaceholder: "Новое имя",
        renameStartButton: "Начать",
        renameFoldersCheckbox: "Переименовывать папки",
        recursiveRenameCheckbox: "Переименовывать файлы внутри папок"
    },
    en: {
        main: "Home",
        delete: "Delete",
        replace: "Replace",
        add: "Add",
        rename: "Rename",
        help: "Help",
        support: "Support",
        deleteTitle: "Delete from Name",
        deleteDescription: "Select a folder with the necessary files<br>Enter the recurring 'pattern' or another symbol you want to delete",
        replaceTitle: "Replace in Name",
        replaceDescription: "Select a folder with the necessary files<br>Enter a new 'pattern' for replacement or another symbol to replace",
        addTitle: "Add to Name",
        addDescription: "Select a folder with the necessary files<br>Enter a 'pattern' to add. You can add to the beginning or the end of the name",
        renameTitle: "Rename",
        renameDescription: "Select a folder with the necessary files<br>Enter a new name for all files. After running, all files will be renamed",
        start: "Start",

        deleteTitle: "Delete from name",
        deleteFolderPathLabel: "Folder path:",
        deletePlaceholder: "Select folder path",
        deleteText: "Text to delete:",
        deleteStartButton: "Start",

        replaceTitle: "Replace in file names",
        replaceFolderPathLabel: "Folder path:",
        replaceSearchPlaceholder: "Search text",
        replaceReplacePlaceholder: "Replace text",
        replaceStartButton: "Start",

        addTitle: "Add to file names",
        addFolderPathLabel: "Folder path:",
        addPlaceholder: "Enter text",
        addToStartCheckbox: "Add to start",
        addToEndCheckbox: "Add to end",
        addStartButton: "Start",

        renameTitle: "Rename all files",
        renameFolderPathLabel: "Folder path:",
        renamePlaceholder: "New name",
        renameStartButton: "Start",
        renameFoldersCheckbox: "Rename folders",
        recursiveRenameCheckbox: "Rename files inside folders"
    }
};

function updateLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang); // Сохранение выбранного языка
    
    const labelAddToStart = document.querySelector('label[for="addToStartCheckbox"]');
    if (labelAddToStart) {
        labelAddToStart.textContent = translations[lang].addToStartCheckbox;
    }

    const labelRenameFolders = document.querySelector('label[for="renameFoldersCheckbox"]');
    if (labelRenameFolders) {
        labelRenameFolders.textContent = translations[lang].renameFoldersCheckbox;
    }

    // Обновление текста на странице
    document.querySelector('.menu-item[data-section="main"]').textContent = translations[lang].main;
    document.querySelector('.menu-item[data-section="delete"]').textContent = translations[lang].delete;
    document.querySelector('.menu-item[data-section="replace"]').textContent = translations[lang].replace;
    document.querySelector('.menu-item[data-section="add"]').textContent = translations[lang].add;
    document.querySelector('.menu-item[data-section="rename"]').textContent = translations[lang].rename;
    document.querySelector('.menu-item[data-section="help"]').textContent = translations[lang].help;
    document.querySelector('.menu-item[data-section="support"]').textContent = translations[lang].support;

    document.querySelector('#main-section .action:nth-child(1) h2').textContent = translations[lang].deleteTitle;
    document.querySelector('#main-section .action:nth-child(1) p').innerHTML = translations[lang].deleteDescription;
    document.querySelector('#main-section .action:nth-child(1) .start-button').textContent = translations[lang].start;

    document.querySelector('#main-section .action:nth-child(2) h2').textContent = translations[lang].replaceTitle;
    document.querySelector('#main-section .action:nth-child(2) p').innerHTML = translations[lang].replaceDescription;
    document.querySelector('#main-section .action:nth-child(2) .start-button').textContent = translations[lang].start;

    document.querySelector('#main-section .action:nth-child(3) h2').textContent = translations[lang].addTitle;
    document.querySelector('#main-section .action:nth-child(3) p').innerHTML = translations[lang].addDescription;
    document.querySelector('#main-section .action:nth-child(3) .start-button').textContent = translations[lang].start;

    document.querySelector('#main-section .action:nth-child(4) h2').textContent = translations[lang].renameTitle;
    document.querySelector('#main-section .action:nth-child(4) p').innerHTML = translations[lang].renameDescription;
    document.querySelector('#main-section .action:nth-child(4) .start-button').textContent = translations[lang].start;

    // Обновление текста для всех разделов
    document.querySelector('.menu-item[data-section="main"]').textContent = translations[lang].main;
    document.querySelector('.menu-item[data-section="delete"]').textContent = translations[lang].delete;
    document.querySelector('.menu-item[data-section="replace"]').textContent = translations[lang].replace;
    document.querySelector('.menu-item[data-section="add"]').textContent = translations[lang].add;
    document.querySelector('.menu-item[data-section="rename"]').textContent = translations[lang].rename;
    document.querySelector('.menu-item[data-section="help"]').textContent = translations[lang].help;
    document.querySelector('.menu-item[data-section="support"]').textContent = translations[lang].support;

    // Удаление
    document.querySelector('#delete-section .section__title').textContent = translations[lang].deleteTitle;
    document.querySelector('#delete-section .section__label').textContent = translations[lang].deleteFolderPathLabel;
    document.querySelector('#folderPath').placeholder = translations[lang].deletePlaceholder;
    document.querySelector('#pattern').placeholder = translations[lang].deleteText;
    document.querySelector('#renameBtn').textContent = translations[lang].deleteStartButton;

    // Замена
    document.querySelector('#replace-section .section__title').textContent = translations[lang].replaceTitle;
    document.querySelector('#replace-section .section__label').textContent = translations[lang].replaceFolderPathLabel;
    document.querySelector('#folderPath2').placeholder = translations[lang].deletePlaceholder;
    document.querySelector('#searchText').placeholder = translations[lang].replaceSearchPlaceholder;
    document.querySelector('#replaceText').placeholder = translations[lang].replaceReplacePlaceholder;
    document.querySelector('#replaceBtn').textContent = translations[lang].replaceStartButton;

    // Добавление
    document.querySelector('#add-section .section__title').textContent = translations[lang].addTitle;
    document.querySelector('#add-section .section__label').textContent = translations[lang].addFolderPathLabel;
    document.querySelector('#folderPath3').placeholder = translations[lang].deletePlaceholder;
    document.querySelector('#addTextInput').placeholder = translations[lang].addPlaceholder;
    document.querySelector('#addToStartCheckbox + label').textContent = translations[lang].addToStartCheckbox;
    document.querySelector('#addToEndCheckbox + label').textContent = translations[lang].addToEndCheckbox;
    document.querySelector('#addTextBtn').textContent = translations[lang].addStartButton;

    // Переименование
    document.querySelector('#rename-section .section__title').textContent = translations[lang].renameTitle;
    document.querySelector('#rename-section .section__label').textContent = translations[lang].renameFolderPathLabel;
    document.querySelector('#folderPath4').placeholder = translations[lang].deletePlaceholder;
    document.querySelector('#baseTextInput').placeholder = translations[lang].renamePlaceholder;
    document.querySelector('#renameWithNumbersBtn').textContent = translations[lang].renameStartButton;
    document.querySelector('#renameFoldersCheckbox + label').textContent = translations[lang].renameFoldersCheckbox;
    document.querySelector('#recursiveRenameCheckbox + label').textContent = translations[lang].recursiveRenameCheckbox;
}


