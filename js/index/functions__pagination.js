// ==========  Variables ==========
const pagination = document.querySelector('#pagination');
const buttomMore = document.querySelector('#button__more');
const indexButton = document.querySelector('#index__button');
const paginationLeft = document.querySelector('#pagination-arrow-left');
const paginationRight = document.querySelector('#pagination-arrow-right');
const paginationButton1 = document.querySelector('#pagination-button1');
const paginationButton4 = document.querySelector('#pagination-button4');


/* ===== Pagination =================================
======================================================*/
// 1. анимируем кнопки перелистывания страниц
function translateButtonPagination (translateStyle, translateButton) {
    document.querySelector(translateButton).style.transform = translateStyle;
    document.querySelectorAll('.pagination__item').forEach(function(item) {
        item.style.transform = translateStyle;
    });
};

// 2. скрываем/показываем нужные кнопки
function opacityButtonPagination (arrow1, arrow2, button1, button2) {
    document.querySelector(arrow1).style.opacity = '0';
    document.querySelector(arrow2).style.opacity = '1';
    document.querySelector(button1).style.opacity = '1';
    document.querySelector(button2).style.opacity = '0';
};

// 3. скрываем/показываем нужные containers
function activePagination (paginationButton1, paginationButton2, paginationButton3, paginationButton4, varStart1, varFinish1, varStart2, varFinish2, varStart3, varFinish3) {
    document.querySelector(paginationButton1).addEventListener('click', function() {
        document.querySelector(paginationButton1).classList.add('active');
        document.querySelector(paginationButton2).classList.remove('active');
        document.querySelector(paginationButton3).classList.remove('active');
        document.querySelector(paginationButton4).classList.remove('active');

        const mainContainer = document.querySelectorAll('.preview__container');

        for (i=0; i < mainContainer.length; i++) {
            mainContainer[i].classList.remove('hide');
        };
        for (i=varStart1; i < mainContainer.length - varFinish1; i++) {
            mainContainer[i].classList.add('hide');
        };
        for (i=varStart2; i < mainContainer.length - varFinish2; i++) {
            mainContainer[i].classList.add('hide');
        };
        for (i=varStart3; i < mainContainer.length - varFinish3; i++) {
            mainContainer[i].classList.add('hide');
        };

        up();
    });
};

// 4. обнуляем pagination
function firstPagePagination () {
    const mainContainer = document.querySelectorAll('.preview__container');

    pagination.classList.add('show');
    buttomMore.classList.remove('show');
    indexButton.classList.remove('show');

    paginationButton1.classList.add('active');
    document.querySelector('#pagination-button2').classList.remove('active');
    document.querySelector('#pagination-button3').classList.remove('active');
    paginationButton4.classList.remove('active');

    leftButtonPaginationClick ();

    for (i=7; i < mainContainer.length - 14; i++) {
        mainContainer[i].classList.add('hide');
    };
    for (i=14; i < mainContainer.length - 7; i++) {
        mainContainer[i].classList.add('hide');
    };
    for (i=21; i < mainContainer.length; i++) {
        mainContainer[i].classList.add('hide');
    };
};

function leftButtonPaginationClick () {
    pagination.classList.remove('right');
    document.querySelector('#pagination-arrow-left').classList.remove('active');

    // скрываем/показываем нужные кнопки
    opacityButtonPagination('#pagination-arrow-left', '#pagination-arrow-right', '#pagination-button1', '#pagination-button4');

    // анимируем кнопки перелистывания страниц
    translateButtonPagination('translateX(-2rem)', '#pagination-arrow-right');

    setTimeout(function(){

        // анимируем кнопки перелистывания страниц
        translateButtonPagination('translateX(0)', '#pagination-arrow-right');

        paginationButton4.classList.add('hide');
        document.querySelector('#pagination-arrow-right').classList.add('active');
        paginationButton1.classList.remove('hide');
    }, 200);
};

// 5. показывать/скрывать кнопки Pagination и Button More
function showHidePaginationButtonMore (listShow) {
    if ( listShow.length > 7 && listShow.length < 28 ) {
        pagination.classList.remove('show');
        buttomMore.classList.add('show');
        indexButton.classList.remove('show');
    
        for ( i=7; i < listShow.length; i++ ) {
            listShow[i].classList.add('hidemore');
        };
    
    } else if ( listShow.length <= 7 ) {
        pagination.classList.remove('show');
        buttomMore.classList.remove('show');
        indexButton.classList.add('show');
    } else {
        pagination.classList.add('show');
        buttomMore.classList.remove('show');
        indexButton.classList.remove('show');
    
        firstPagePagination();
    };
};
