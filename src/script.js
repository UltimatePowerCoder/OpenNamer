document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru'; // Получаем сохраненный язык или ставим русский
    updateLanguage(savedLanguage); // Обновляем интерфейс на выбранный язык
});

document.getElementById('start-delete').addEventListener('click', function() {
    document.querySelector('.menu-item[data-section="delete"]').click();
});

document.getElementById('start-replace').addEventListener('click', function() {
    document.querySelector('.menu-item[data-section="replace"]').click();
});

document.getElementById('start-add').addEventListener('click', function() {
    document.querySelector('.menu-item[data-section="add"]').click();
});

document.getElementById('start-rename').addEventListener('click', function() {
    document.querySelector('.menu-item[data-section="rename"]').click();
});

const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.content__section');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        const sectionToShow = item.getAttribute('data-section');

        // Удаляем активный класс у всех пунктов меню и секций
        menuItems.forEach(menuItem => menuItem.classList.remove('active'));
        sections.forEach(section => section.classList.remove('content__section--active'));

        // Добавляем активный класс текущему пункту меню и соответствующей секции
        item.classList.add('active');
        document.getElementById(`${sectionToShow}-section`).classList.add('content__section--active');
    });
});
