/* ===== Render Tours ==================================
======================================================*/
const title = document.querySelector('title').innerText;

if (title == 'Экскурсии и туры') {
    getTours('./js/index/tours.json', title, 'normal');
} else if (title == 'Экскурсии') {
    getTours('./js/allexcursions/excursion.json', title, 'preview__container--padding');
} else if (title == 'Туры') {
    getTours('./js/allexcursions/tours.json', title, 'preview__container--padding');
} else if (title == 'Трекинг') {
    getTours('./js/allexcursions/tracking.json', title, 'preview__container--padding');
};