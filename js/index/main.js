/* ===== Slider Greeting, RESIZE =======================
======================================================*/

if ( window.innerWidth >= 670 ) {
    // показываем slider greeting
    new Sim ('#sim-slider', '.sim-slider-list', '.sim-slider-element', 'div.sim-slider-arrow-left', 'div.sim-slider-arrow-right', 'div.sim-slider-dots', {
        loop: true,     // Бесконечное зацикливание слайдера
        auto: true,     // Автоматическое пролистывание
        interval: 5000, // Интервал между пролистыванием элементов (мс)
        arrows: false,   // Пролистывание стрелками
        dots: true      // Индикаторные точки
    });

};

window.addEventListener ("resize", function() {
    if ( window.innerWidth >= 670 ) {
        // показываем slider greeting
        new Sim ('#sim-slider', '.sim-slider-list', '.sim-slider-element', 'div.sim-slider-arrow-left', 'div.sim-slider-arrow-right', 'div.sim-slider-dots', {
            loop: true,    
            auto: true,     
            interval: 5000, 
            arrows: false,   
            dots: true     
        });
    };
});


/* ===== Constructor tours =============================
======================================================*/

// ========== 1. Greeting Dropdown ==========
// ========== 1.1 Greeting Dropdown During ===========
const formDropdownDuring = document.querySelector('#formDropdownDuring');

const dropDownBtnDuring = formDropdownDuring.querySelector('.dropdown__button');
const dropDownListDuring = formDropdownDuring.querySelector('.dropdown__list');
const dropDownListItemsDuring = dropDownListDuring.querySelectorAll('.dropdown__list-item');

// Клик по кнопке. Открыть/Закрыть select
dropDownBtnDuring.addEventListener('click', function(){
    dropDownListDuring.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
    dropDownListItemsDuring.forEach(function (listItem) {
        if ( (choiceTextPrice == "до 2000 руб" && choiceTextType == "Экскурсия") || (choiceTextPrice == "2000-3999 руб" && choiceTextType == "Экскурсия") || (choiceTextPrice == "4000-6999 руб" && choiceTextType == "Экскурсия") || choiceTextPrice == "до 2000 руб" || choiceTextPrice == "2000-3999 руб" || choiceTextPrice == "4000-6999 руб" || choiceTextType == "Трекинг" ) {

            listItem.classList.add('hide');
            if ( listItem.innerText == "1 день" || listItem.innerText == 'Выбрать кол-во дней' ) {
                listItem.classList.remove('hide');
            }

        } else if ( choiceTextType == "Экскурсия" && choiceTextPrice == "7000-19999 руб" ) {
            
            listItem.classList.add('hide');
            if ( listItem.innerText == "2-3 дня" || listItem.innerText == 'Выбрать кол-во дней' ) {
                listItem.classList.remove('hide');
            }

        } else if ( choiceTextType == "Путешествие" || choiceTextPrice == "7000-19999 руб" ) {
            
            listItem.classList.add('hide');
            if ( listItem.innerText != "1 день" ) {
                listItem.classList.remove('hide');
            }

        } else if ( choiceTextType == "Экскурсия" ) {
            
            listItem.classList.add('hide');
            if ( listItem.innerText == "1 день" || listItem.innerText == "2-3 дня" || listItem.innerText == 'Выбрать кол-во дней' ) {
                listItem.classList.remove('hide');
            }

        } else if ( (choiceTextType == "Путешествие" && choiceTextPrice == "от 20000 руб" ) || choiceTextPrice == "от 20000 руб" ) {
            
            listItem.classList.add('hide');
            if ( listItem.innerText != "1 день" && listItem.innerText != "2-3 дня" ) {
                listItem.classList.remove('hide');
            }

        } else {
            listItem.classList.remove('hide');
        }
    });
});

// Выбор эл-та из списка. Запомнить выбранное зн-е. Закрыть dropdown
clickDropDown (dropDownListItemsDuring, dropDownBtnDuring, dropDownListDuring, choiceUserDuring);


// ========== 1.2 Greeting Dropdown Format ===========
const formDropdownFormat = document.querySelector('#formDropdownFormat');

const dropDownBtnFormat = formDropdownFormat.querySelector('.dropdown__button');
const dropDownListFormat = formDropdownFormat.querySelector('.dropdown__list');
const dropDownListItemsFormat = dropDownListFormat.querySelectorAll('.dropdown__list-item');

// Клик по кнопке. Открыть/Закрыть select
dropDownBtnFormat.addEventListener('click', function(){
    dropDownListFormat.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
});

// Выбор эл-та из списка. Запомнить выбранное зн-е. Закрыть dropdown
clickDropDown (dropDownListItemsFormat, dropDownBtnFormat, dropDownListFormat, choiceUserFormat);


// =========== 1.3 Greeting Dropdown Type ===========
const formDropdownType = document.querySelector('#formDropdownType');

const dropDownBtnType = formDropdownType.querySelector('.dropdown__button');
const dropDownListType = formDropdownType.querySelector('.dropdown__list');
const dropDownListItemsType = dropDownListType.querySelectorAll('.dropdown__list-item');

// Клик по кнопке. Открыть/Закрыть select
dropDownBtnType.addEventListener('click', function(){
    dropDownListType.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
    dropDownListItemsType.forEach(function (listItem) {

        if ( choiceTextDuring == "1 день" || choiceTextPrice == "до 2000 руб" || choiceTextPrice == "2000-3999 руб" || choiceTextPrice == "4000-6999 руб" ) {

            listItem.classList.add('hide');
            if ( listItem.innerText != "Путешествие" ) {
                listItem.classList.remove('hide');
            }

        } else if ( choiceTextPrice == "7000-19999 руб" || choiceTextDuring == "2-3 дня" ) {

            listItem.classList.add('hide');
            if ( listItem.innerText != "Трекинг" ) {
                listItem.classList.remove('hide');
            }

        } else if ( choiceTextDuring == "4-5 дней" || choiceTextDuring == "6-7 дней" || choiceTextPrice == "от 20000 руб" ) {

            listItem.classList.add('hide');
            if ( listItem.innerText != "Экскурсия" && listItem.innerText != "Трекинг" ) {
                listItem.classList.remove('hide');
            }

        } else {
            listItem.classList.remove('hide');
        }
    });
});


// Выбор эл-та из списка. Запомнить выбранное зн-е. Закрыть dropdown
clickDropDown (dropDownListItemsType, dropDownBtnType, dropDownListType, choiceUserType);


// =========== 1.4 Greeting Dropdown Price ===========
const formDropdownPrice = document.querySelector('#formDropdownPrice');

const dropDownBtnPrice = formDropdownPrice.querySelector('.dropdown__button');
const dropDownListPrice = formDropdownPrice.querySelector('.dropdown__list');
const dropDownListItemsPrice = dropDownListPrice.querySelectorAll('.dropdown__list-item');

// Клик по кнопке. Открыть/Закрыть select
dropDownBtnPrice.addEventListener('click', function(){
    dropDownListPrice.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
    dropDownListItemsPrice.forEach(function (listItem) {

        if ( choiceTextDuring == "1 день" || choiceTextType == "Трекинг" ) {

            listItem.classList.add('hide');
            if ( listItem.innerText != "7000-19999 руб" && listItem.innerText != "от 20000 руб" ) {
                listItem.classList.remove('hide');
            }

        }  else if ( choiceTextDuring == "2-3 дня" || choiceTextType == "Экскурсия" ) {

            listItem.classList.add('hide');
            if ( listItem.innerText != "до 2000 руб" && listItem.innerText != "2000-3999 руб" && listItem.innerText != "4000-6999 руб" && listItem.innerText != "от 20000 руб" ) {
                listItem.classList.remove('hide');
            }

        } else if ( choiceTextDuring == "4-5 дней" ) {

            listItem.classList.add('hide');
            if ( listItem.innerText != "до 2000 руб" && listItem.innerText != "2000-3999 руб" && listItem.innerText != "4000-6999 руб" ) {
                listItem.classList.remove('hide');
            }

        } else if ( choiceTextDuring == "6-7 дней" && choiceTextType == "Путешествие" ) {

            listItem.classList.add('hide');
            if ( listItem.innerText != "до 2000 руб" && listItem.innerText != "2000-3999 руб" && listItem.innerText != "4000-6999 руб" && listItem.innerText != "7000-19999 руб" ) {
                listItem.classList.remove('hide');
            }

        } else if ( choiceTextType == "Путешествие" ) {

            listItem.classList.add('hide');
            if ( listItem.innerText != "до 2000 руб" && listItem.innerText != "2000-3999 руб" && listItem.innerText != "4000-6999 руб" ) {
                listItem.classList.remove('hide');
            }

        } else {
            listItem.classList.remove('hide');
        }
    });
});


// ========== 2. Filter Conctructor ==========
constructorToursSearchButton.addEventListener('click', function(){

    // объявляем списки со зн-ями переменных
    generalFilterDuringListValue = [0, 1, 2, 3, 4, 5, 6, 7];
    generalFilterDuringListElement = ["1 день", "2-3 дня", "4-5 дней", "6-7 дней"];
    generalFilterPriceListValue = [0, 2000, 2000, 4000, 4000, 7000, 7000, 20000];
    generalFilterPriceListElement = ["до 2000 руб", "2000-3999 руб", "4000-6999 руб", "7000-19999 руб"];

    // находим зн-я выбранные пользователем
    generalFilterDuring = choiceGeneralFilter ('#dropdown__during', generalFilterDuringListValue, generalFilterDuringListElement, 0, 7);
    generalFilterFormat = choiceGeneralFilterCheckbox ('#dropdown__format');
    generalFilterType = choiceGeneralFilterCheckbox ('#dropdown__type');
    generalFilterPrice = choiceGeneralFilter ('#dropdown__price', generalFilterPriceListValue, generalFilterPriceListElement, 0, 100000);

    // обнуляем переменные чтобы при нажатии на Search показывались все варианты выбора 
    choiceTextDuring = "null" , choiceTextType = "null", choiceTextPrice = "null";

    // обнуляем зн-я выбора пользователя в Constructor tours
    document.querySelectorAll('.greeting__form-dropdown').forEach(function (dropDownWrapper) { 
        dropDownWrapper.querySelector('.dropdown__button').innerText = dropDownWrapper.querySelector('.dropdown__list-item').innerText;
        dropDownWrapper.querySelector('.dropdown__button').classList.add('null');
        dropDownWrapper.querySelectorAll('.dropdown__list-item').forEach(function(listItem) {
            listItem.classList.remove('hide');
        })
    });

    // создаём списки выбранных пользователем эл-тов
    let listGeneralFilterShow = [];

    const container = document.querySelectorAll('.preview__container');

    // сортируем контейнеры
    container.forEach(function(item) {
        const duringPreviewContainer = parseInt(item.dataset.days);
        // const formatPreviewContainer = item.dataset.travel;
        const typePreviewContainer = item.querySelector('.type__text').innerText;
        const pricePreviewContainer = parseInt(item.querySelector('.price').innerText);

        item.classList.remove('hide');

        if ( duringPreviewContainer >= generalFilterDuring[0] && duringPreviewContainer <= generalFilterDuring[1] && (generalFilterType == "null" || generalFilterType == typePreviewContainer) && pricePreviewContainer >= generalFilterPrice[0] && pricePreviewContainer < generalFilterPrice[1] ) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }

        if (item.classList.contains('hide') == false) {

            listGeneralFilterShow.push(item);
        }
    });

    // показывать/скрывать кнопки Pagination и Button More
    showHidePaginationButtonMore (listGeneralFilterShow);
 });

// Выбор эл-та из списка. Запомнить выбранное зн-е. Закрыть dropdown
clickDropDown (dropDownListItemsPrice, dropDownBtnPrice, dropDownListPrice, choiceUserPrice);


/* ===== Pagination ====================================
======================================================*/
// =========== 1. Выстраиваем контейнеры ===========
activePagination ('#pagination-button1', '#pagination-button2', '#pagination-button3', '#pagination-button4', 7, 14, 14, 7, 21, 0);
activePagination ('#pagination-button2', '#pagination-button1', '#pagination-button3', '#pagination-button4', 14, 7, 21, 0, 0, 21);
activePagination ('#pagination-button3', '#pagination-button2', '#pagination-button1', '#pagination-button4', 0, 21, 7, 14, 21, 0);
activePagination ('#pagination-button4', '#pagination-button2', '#pagination-button3', '#pagination-button1', 0, 21, 7, 14, 14, 7);


// =========== 2. Движение стрелок Pagination ===========
paginationLeft.addEventListener('click', function(){
    leftButtonPaginationClick ();
});

paginationRight.addEventListener('click', function(){

    pagination.classList.add('right');
    this.classList.remove('active');

    // скрываем/показываем нужные кнопки
    opacityButtonPagination('#pagination-arrow-right', '#pagination-arrow-left', '#pagination-button4', '#pagination-button1');

    // анимируем кнопки перелистывания страниц
    translateButtonPagination('translateX(2rem)', '#pagination-arrow-left');

    setTimeout(function(){

        // анимируем кнопки перелистывания страниц
        translateButtonPagination('translateX(0)', '#pagination-arrow-left');

        paginationButton1.classList.add('hide');
        document.querySelector('#pagination-arrow-left').classList.add('active');
        paginationButton4.classList.remove('hide');
    }, 200);
});


// =========== 3. More Tours ===========
buttomMore.addEventListener('click', function() {
    buttomMore.classList.remove('show');
    indexButton.classList.add('show');
    document.querySelectorAll('.preview__container').forEach( function(item) {
        item.classList.remove('hidemore');
    });
});

