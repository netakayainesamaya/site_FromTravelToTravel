// Полифилл для метода foorEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
};


/* ========== Variables ===================
=========================================*/
// ========== 1. Main Variables ==========
const header = document.querySelector('#header');
const body = document.querySelector('body');
const nav = document.querySelector('#nav');
const navToggle = document.querySelector('#nav-toggle');

// ========== 2. Constructor tours ==========
// объявляем переменные, в к. будут храниться значения выбора пользователя
let choiceTextDuring, choiceTextFormat, choiceTextType, choiceTextPrice;

// ========== 5. Footer Buttons ==========
// ========== 5.1 Click ==========
const call = document.querySelector('#call');
const dataSend = document.querySelectorAll('[data-send]');
// ========== 5.2 Buttons Html ==========
const callUs = document.querySelector('#callus');
const rightUs = document.querySelector('#rightus');


/* ===== 1. Menu nav toggle ============================
======================================================*/
// показываем burger-menu и закрывает его
function openNavToggle() {
    navToggle.onclick = function(){

        /* меняем наше бургер-меню на крестик */
        navToggle.classList.toggle('nav-toggle-active');
    
        /* при клике мы хотим добавлять класс active для Menu*/
        nav.classList.toggle("nav-active");
    
        // меняем фон header subnav
        header.classList.toggle('header-active');
    
        // клик снаружи subnav будет закрывать subnav
        document.addEventListener('click', function(event) {
            // если мы кликнули не по кнопке, то мы скрываем активный класс кнопки и скрываем list
            if (event.target !== document.querySelector('#nav-list') && event.target !== navToggle) {
                nav.classList.remove("nav-active");
                header.classList.remove('header-active');
                navToggle.classList.remove('nav-toggle-active');
            };
        });
    };
};

// закрываем burger-menu при изменении ширины экрана
function closeNavToggle () {
    nav.classList.remove("nav-active");
    header.classList.remove('header-active');
    navToggle.classList.remove('nav-toggle-active');
};

/* ===== 2. Constructor tours ==========================
======================================================*/
// ========== 2.1 Dropdown  ==========
function choiceUserDuring (choiceUserText) {
    choiceTextDuring = choiceUserText;
};

function choiceUserFormat (choiceUserText) {
    choiceTextFormat = choiceUserText;
};

function choiceUserType (choiceUserText) {
    choiceTextType = choiceUserText;
};

function choiceUserPrice (choiceUserText) {
    choiceTextPrice = choiceUserText;
};

// 2.2 Записываем выбранные пользователем зн-я в Constructor tours
function choiceGeneralFilter (idDiv, valueList, elementList, minValue, maxValue) {
    // Объявляем переменные
    let choiceList, choiceElement1, choiceElement2;
    const choiceEl = document.querySelector(idDiv);

    // выбираем нужные зн-я
    if (choiceEl.innerText == elementList[0]) {
        choiceElement1 = valueList[0];
        choiceElement2 = valueList[1];
        choiceList = [choiceElement1, choiceElement2];
    } else if (choiceEl.innerText == elementList[1]) {
        choiceElement1 = valueList[2];
        choiceElement2 = valueList[3];
        choiceList = [choiceElement1, choiceElement2];
    } else if (choiceEl.innerText == elementList[2]) {
        choiceElement1 = valueList[4];
        choiceElement2 = valueList[5];
        choiceList = [choiceElement1, choiceElement2];
    } else if (choiceEl.innerText == elementList[3]) {
        choiceElement1 = valueList[6];
        choiceElement2 = valueList[7];
        choiceList = [choiceElement1, choiceElement2];
    } else if (choiceEl.innerText == "от 20000 руб") {
        choiceElement1 = 20000;
        choiceElement2 = 100000;
        choiceList = [choiceElement1, choiceElement2];
    };

    // Проверяем на значение 'null'
    const choiceContains = choiceEl.classList.contains('null');
    if (choiceContains === false) {
        // Если зн-е не выбрано в переменную записываем 'null'
        return choiceList;
    } else {
        // Записываем выбранное зн-е в переменную
        choiceElement1 = minValue;
        choiceElement2 = maxValue;
        choiceList = [choiceElement1, choiceElement2];
        return choiceList;
    };
};

// 2.3 Записываем выбранные пользователем зн-я в Constructor tours в переменные checkbox
function choiceGeneralFilterCheckbox (idDiv) {
    // Объявляем переменные
    const choiceEl = document.querySelector(idDiv);

    // Проверяем на значение 'null'
    const choiceContains = choiceEl.classList.contains('null');
    if (choiceContains === false) {
        // Если зн-е не выбрано в переменную записываем 'null'
        return choiceEl.innerText
    } else {
        // Записываем выбранное зн-е в переменную
        return 'null'
    };
};


/* ===== 3. Render tours ===============================
======================================================*/
// ========== 3.1 length text ==========
function textcut(text, limit) {
    text = text.trim();
    if( text.length <= limit) return text;

    text = text.slice(0, limit);
    return text.trim() + "...";
};

// ========== 3.2 Функции сортировки ==========
function maxPriceSort(arr) {
    arr.sort((a, b) => a.newPrice > b.newPrice ? -1 : 1);
};

function minPriceSort(arr) {
    arr.sort((a, b) => a.newPrice > b.newPrice ? 1 : -1);
};

// function normalPriceSort(arr) {
//     arr.sort((a, b) => a.newPrice > b.newPrice ? 1 : 1);
// }

function maxDuringSort (arr) {
    arr.sort(maxDuringHours);
    arr.sort(maxDuringDays);

    function maxDuringDays( a, b ) {
        if ( a.duringDays > b.duringDays ) {
            return -1; 
        } else if ( a.duringDays < b.duringDays ) {
            return 1; 
        } else {
            return 0;
        };
    };

    function maxDuringHours( a, b ) {
        if ( a.duringHours > b.duringHours ) {
            return -1;
        } else if ( a.duringHours < b.duringHours ) {
            return 1;
        } else {
            return 0;
        };
    };
};

function minDuringSort (arr) {
    arr.sort(maxDuringHours);
    arr.sort(maxDuringDays);

    function maxDuringDays( a, b ) {
        if ( a.duringDays > b.duringDays ) {
            return 1; 
        } else if ( a.duringDays < b.duringDays ) {
            return -1; 
        } else {
            return 0;
        };
    };

    function maxDuringHours( a, b ) {
        if ( a.duringHours > b.duringHours ) {
            return 1;
        } else if ( a.duringHours < b.duringHours ) {
            return -1;
        } else {
            return 0;
        };
    };
};


/* ===== 4. Button Up =====================================
======================================================*/
function up() {
    let timeOutScroll;
    const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if ( top > 1500 ) {
        window.scrollBy(0, -500);
        timeOutScroll = setTimeout('up()', 10);
    } else if ( top > 0 ) {
        window.scrollBy(0, -100);
        timeOutScroll = setTimeout('up()', 10);
    } else clearTimeout(timeOutScroll);
    return false;
};


/* ===== 5. Footer Buttons =================================
======================================================*/
// =========== 5.1 Click Footer Send Button ===========
function clickFooterSendButton (button, buttonHtml, text, textShort) {
    window.addEventListener ("resize", function() {   
        buttonHtml.classList.remove('show');
    });  

    button.addEventListener('click', function() {
        const hidden = buttonHtml.querySelector('.form__header-text');

        shortText (hidden, text, textShort);
        
        // открываем вопросник
        buttonHtml.classList.add('show');
    
        setTimeout(function(){
            buttonHtml.querySelector('.question').classList.add('show');
        }, 200)
    
        // закрываем вопросник при нажатии на крестик
        buttonHtml.querySelector('.modal__close').addEventListener('click', function() {
            buttonHtml.querySelector('.question').classList.remove('show');
    
            setTimeout(function(){
                buttonHtml.classList.remove('show');
            }, 200);
        });
    
        // клик снаружи question будет закрывать вопросник
        document.addEventListener('click', function(event) {
            if (event.target == buttonHtml || event.target == buttonHtml.querySelector('.question')) {
                buttonHtml.querySelector('.question').classList.remove('show');
    
                setTimeout(function(){
                    buttonHtml.classList.remove('show');
                }, 200);
            };
        });
    });
};


// =========== 5.2 Dropdown Click Button Send ===========
function dropdownSendForm (formDropdown, dropdownButton, answerText, answerTextShort) {
    const formDropdownSend = document.querySelector(formDropdown);
    const dropdownButtonSend = document.querySelector(dropdownButton);
    const dropdownListSend = formDropdownSend.querySelector('.dropdown__list');

    shortText (dropdownButtonSend, answerText, answerTextShort);

    clickDropdownButton (dropdownButtonSend, dropdownListSend, answerText, answerTextShort);
};

function clickDropdownButton (button, dropdownListSend, answerText, answerTextShort) {
    const hidden = dropdownListSend.querySelector('[data-value]');
    const dropDownListItems = dropdownListSend.querySelectorAll('.dropdown__list-item');

    button.addEventListener('click', function(){
        shortText (hidden, answerText, answerTextShort);

        dropdownListSend.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
        clickDropDown (dropDownListItems, button, dropdownListSend);
    });
};

function shortText (button, answerText, answerTextShort) {
    choiceTextShort (button, answerText, answerTextShort);

    window.addEventListener ("resize", function() {   
        choiceTextShort (button, answerText, answerTextShort);
    });
};

function choiceTextShort (button, answerText, answerTextShort) {
    if ( window.innerWidth >= 490 ) {
        button.innerText = answerText;
    } else {
        button.innerText = answerTextShort;
    };
};

// =========== 5.3 Dropdown Click Button Dropdown ===========
function clickDropDown (dropDownListItems, dropDownBtn, dropDownList, funChoice) {
    
    // Выбор эл-та из списка. Запомнить выбранное зн-е. Закрыть dropdown
    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function(event) {
            event.stopPropagation();
            dropDownBtn.innerText = this.innerText; 
    
            if (typeof funChoice != 'undefined') {
                const choiceText =  dropDownBtn.innerText;
                funChoice (choiceText);
            };
            // const choiceText =  dropDownBtn.innerText;
            // funChoice (choiceText);
    
            dropDownBtn.focus();
            dropDownList.classList.remove('dropdown__list--visible');
            // dropdownInput = this.dataset;
            const choice = listItem.dataset.value;

            if (choice == 'null') {
                dropDownBtn.classList.add('null');
            } else {
                dropDownBtn.classList.remove('null');
            };
        });    
    });

    // Клик снаружи dropdown будет закрывать dropdown
    document.addEventListener('click', function(event) {
        // если мы кликнули не по кнопке, то мы скрываем активный класс кнопки и скрываем list
        if (event.target !== dropDownBtn) {
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownList.classList.remove('dropdown__list--visible');
        };
    });

    // Добавляем работу клавиш esc и tab с нашим выпадающим списком
    document.addEventListener('keydown', function(e){
        if (e.key === 'Tab' || e.key === 'Escape') { // свойство key - означает зн-е клавиши, на к. мы нажали
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownList.classList.remove('dropdown__list--visible');
        };
    });
};
