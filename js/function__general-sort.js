/* ========== Variables ===================
=========================================*/
const toursContainer = document.querySelector('#tours-container');

// ========== Cортировка от большего к меньшему и наоборот  ==========
function generalSort (sortButton, toursArray, functionSort, padding) {

    document.querySelector(sortButton).addEventListener('click', function() {

        // Обнуляем выбор пользователя из Sidebar при смене контейнеров
        if ( document.querySelector('title').innerText == "FromTravelToTravel" || document.querySelector('title').innerText == "Экскурсии и туры" ) {
            nullSidebar();
        };

        // запускаем функцию сортировка от большего к меньшему
        functionSort(toursArray);
    
        // переносим sidebar вне тела контейнера
        if ( document.querySelector('title').innerText == "FromTravelToTravel" || document.querySelector('title').innerText == "Экскурсии и туры" ) {
            toursContainer.before(sidebar);
            toursContainer.before(sidebarButton);
        };
    
        // удаляем текущие контейнеры с турами
        document.querySelectorAll('.preview__container').forEach(function(item) {
            item.remove();
        });
    
        // удаляем текущие modals
        document.querySelectorAll('.modal').forEach(function(item) {
            item.remove();
        });
    
        // Запускаем ф-ю рендера (отображения товаров)
        if ( document.querySelector('title').innerText == "FromTravelToTravel" || document.querySelector('title').innerText == "Экскурсии и туры" ) {
            renderTours(toursArray);
        } else {
            renderTours(toursArray, padding);
        };
    
        // запускаем функцию отображения Sidebar
        if ( document.querySelector('title').innerText == "FromTravelToTravel" || document.querySelector('title').innerText == "Экскурсии и туры" ) {
            visibleSidebar();
        };

        // запускаем функцию отображения ближайших дат
        commingDatesClick ('.etc', '.etc--roll__up', addCommingDatesClass);
        commingDatesClick ('.etc--roll__up', '.etc', removeCommingDatesClass);
    
        // запускаем отображение Modals
        showModal('[data-modal]', '[data-close]', 'show-modal', 'no-scroll', '.modal__gallery', '.modal');

        // скрываем лишние контейнеры при запуске и перелистываем на 1-ю страницу
        if (document.querySelector('title').innerText == "FromTravelToTravel") {
            firstPagePagination(); 
        };
    });
};

function commingDatesClick (button, buttonClose, funClassList) {
    document.querySelectorAll(button).forEach(function (item) {
        item.addEventListener('click', function() {
            const parentElement = item.parentElement;
            const parent = parentElement.parentElement;
            const postCost = parent.querySelector('.post__cost');
            const element = parentElement.querySelector('.comming__date-container');
            const rollUp = parentElement.querySelector(buttonClose);

            funClassList (element, postCost, parentElement);
            
            rollUp.classList.add('show');
            item.classList.remove('show');
        });
    });
}; 

function addCommingDatesClass (element, postCost, parentElement) {
    element.classList.add('show');
    postCost.classList.add('show');
    parentElement.classList.add('show');
};


function removeCommingDatesClass (element, postCost, parentElement) {
    element.classList.remove('show');
    postCost.classList.remove('show');
    parentElement.classList.remove('show');
};