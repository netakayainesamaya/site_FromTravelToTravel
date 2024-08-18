// Полифилл для метода foorEach для NodeList
// if (window.NodeList && !NodeList.prototype.forEach) {
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (var i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }

/* ========== Variables ===================
=========================================*/
// ========== 1. Main Variables ==========
// const header = document.querySelector('#header');
// const body = document.querySelector('body');
// const nav = document.querySelector('#nav');
// const navToggle = document.querySelector('#nav-toggle');
// const toursContainer = document.querySelector('#tours-container');
// const constructorToursSearchButton = document.querySelector('#search');


// // ========== 3. Sidebar ==========
// // ========== 3.1 Main ==========
// const sidebar = document.querySelector('#sidebar');
// const sidebarButton = document.querySelector('#search-button-filter');
// const sidebarSearchButton = document.querySelector('#searchFilter');

// // ========== 3.2 During ==========
// const sidebarSliderDuring = document.querySelector('#slider_during');
// const sidebarFirstSumDuring = document.querySelector('#firstSumDuring');
// const sidebarSliderDuringOutput = document.querySelector('#slider_output_during');

// // ========== 3.3 Price ==========
// const sidebarSliderPrice = document.querySelector('#slider_price');
// const sidebarFirstSumPrice = document.querySelector('#firstSumPrice');
// const sidebarSliderPriceOutput = document.querySelector('#slider_output_price');


// ========== 7. Footer Buttons ==========
// ========== 7.1 Click ==========
// const call = document.querySelector('#call');
// const dataSend = document.querySelectorAll('[data-send]');

// // ========== 7.2 Buttons Html ==========
// const callUs = document.querySelector('#callus');
// const rightUs = document.querySelector('#rightus');


/* ===== 2. Menu nav toggle ============================
======================================================*/
// показываем burger-menu и закрывает его
// function openNavToggle() {
//     navToggle.onclick = function(){

//         /* меняем наше бургер-меню на крестик */
//         navToggle.classList.toggle('nav-toggle-active');
    
//         /* при клике мы хотим добавлять класс active для Menu*/
//         nav.classList.toggle("nav-active");
    
//         // меняем фон header subnav
//         header.classList.toggle('header-active');
    
//         // клик снаружи subnav будет закрывать subnav
//         document.addEventListener('click', function(event) {
//             // если мы кликнули не по кнопке, то мы скрываем активный класс кнопки и скрываем list
//             if (event.target !== document.querySelector('#nav-list') && event.target !== navToggle) {
//                 nav.classList.remove("nav-active");
//                 header.classList.remove('header-active');
//                 navToggle.classList.remove('nav-toggle-active');
//             }
//         });
//     }
// }

// // закрываем burger-menu при изменении ширины экрана
// function closeNavToggle () {
//     nav.classList.remove("nav-active");
//     header.classList.remove('header-active');
//     navToggle.classList.remove('nav-toggle-active');
// }


/* ===== 3. Render tours ===============================
======================================================*/
// ========== 3.1 length text ==========
// function textcut(text, limit) {
//     text = text.trim();
//     if( text.length <= limit) return text;

//     text = text.slice(0, limit);
//     return text.trim() + "...";
// }


// ========== 3.2 Функции сортировки ==========
// function maxPriceSort(arr) {
//     arr.sort((a, b) => a.newPrice > b.newPrice ? -1 : 1);
// }

// function minPriceSort(arr) {
//     arr.sort((a, b) => a.newPrice > b.newPrice ? 1 : -1);
// }

// function normalPriceSort(arr) {
//     arr.sort((a, b) => a.newPrice > b.newPrice ? 1 : 1);
// }

// function maxDuringSort (arr) {
//     arr.sort(maxDuringHours);
//     arr.sort(maxDuringDays);

//     function maxDuringDays( a, b ) {
//         if ( a.duringDays > b.duringDays ) {
//             return -1; 
//         } else if ( a.duringDays < b.duringDays ) {
//             return 1; 
//         } else {
//             return 0;
//         }
//     }

//     function maxDuringHours( a, b ) {
//         if ( a.duringHours > b.duringHours ) {
//             return -1;
//         } else if ( a.duringHours < b.duringHours ) {
//             return 1;
//         } else {
//             return 0;
//         }
//     }
// }

// function minDuringSort (arr) {
//     arr.sort(maxDuringHours);
//     arr.sort(maxDuringDays);

//     function maxDuringDays( a, b ) {
//         if ( a.duringDays > b.duringDays ) {
//             return 1; 
//         } else if ( a.duringDays < b.duringDays ) {
//             return -1; 
//         } else {
//             return 0;
//         }
//     }

//     function maxDuringHours( a, b ) {
//         if ( a.duringHours > b.duringHours ) {
//             return 1;
//         } else if ( a.duringHours < b.duringHours ) {
//             return -1;
//         } else {
//             return 0;
//         }
//     }
// }


// ========== 3.3 Cортировка от большего к меньшему ==========
// function generalSort (sortButton, toursArray, functionSort) {

//     document.querySelector(sortButton).addEventListener('click', function() {

//         // Обнуляем выбор пользователя из Sidebar при смене контейнеров
//         nullSidebar();

//         // запускаем функцию сортировка от большего к меньшему
//         functionSort(toursArray);
    
//         // переносим sidebar вне тела контейнера
//         toursContainer.before(sidebar);
//         toursContainer.before(sidebarButton);
    
//         // удаляем текущие контейнеры с турами
//         document.querySelectorAll('.preview__container').forEach(function(item) {
//             item.remove();
//         });
    
//         // удаляем текущие modals
//         document.querySelectorAll('.modal').forEach(function(item) {
//             item.remove();
//         });
    
//         // Запускаем ф-ю рендера (отображения товаров)
//         renderTours(toursArray);

//         // запускаем функцию отображения ближайших дат
//         document.querySelectorAll('.etc').forEach(function (item) {
//             item.addEventListener('click', function() {
//                 const parentElement = item.parentElement;
//                 const parent = parentElement.parentElement;
//                 const postCost = parent.querySelector('.post__cost');
//                 const element = parentElement.querySelector('.comming__date-container');
//                 const rollUp = parentElement.querySelector('.etc--roll__up');
//                 element.classList.add('show');
//                 postCost.classList.add('show');
//                 parentElement.classList.add('show');
//                 rollUp.classList.add('show');
//                 item.classList.remove('show');
//             });
//         });

//         document.querySelectorAll('.etc--roll__up').forEach(function (item) {
//             item.addEventListener('click', function() {
//                 const parentElement = item.parentElement;
//                 const parent = parentElement.parentElement;
//                 const postCost = parent.querySelector('.post__cost');
//                 const element = parentElement.querySelector('.comming__date-container');
//                 const rollUp = parentElement.querySelector('.etc');
//                 element.classList.remove('show');
//                 postCost.classList.remove('show');
//                 parentElement.classList.remove('show');
//                 rollUp.classList.add('show');
//                 item.classList.remove('show');
//             });
//         });
    
//         // запускаем функцию отображения Sidebar
//         visibleSidebar();
    
//         // запускаем отображение Modals
//         showModal('[data-modal]', '[data-close]', 'show-modal', 'no-scroll', '.modal__gallery', '.modal');
//     })
// }


/* ===== 4. Sidebar =======================================
======================================================*/
// =========== 4.1 Обнуляем выбор пользователя из Sidebar ===========
// function nullSidebar () {
//     document.querySelectorAll('[data-checktype]').forEach(function(checkbox) {
//         checkbox.checked = false;
//     });

//     document.querySelectorAll('[data-checkformat]').forEach(function(checkbox) {
//         checkbox.checked = false;
//     })

//     sidebarSliderDuring.value = 1;
//     sidebarFirstSumDuring.innerText = '1'
//     sidebarSliderDuringOutput.innerText = '7';

//     sidebarSliderPrice.value = 1;
//     sidebarFirstSumPrice.innerText = '1000'
//     sidebarSliderPriceOutput.innerText = '35000';
// }


// // =========== 4.2 Получаем зн-е выбранного чекбокса ===========
// function checkboxValue (dataCheckbox) {
//     let checkboxValuesList = [];
//     document.querySelectorAll(dataCheckbox).forEach (function (item) {

//         if ( item.checked ) {
//             const parent = item.parentElement;
//             checkboxValuesList.push(parent.querySelector('.checkbox__text').innerText);
//         }
//     });

//     return checkboxValuesList;
// }


// =========== 4.3 Checkbox ===========
// function sidebarClickCheckboxType (checkboxExcursion, checkboxTravel, checkboxTracking) {

//     document.querySelector(checkboxExcursion).addEventListener('click', function() {
//         sidebarClickCheckboxTypeValues(checkboxExcursion, checkboxTravel, checkboxTracking);
//     });

//     document.querySelector(checkboxTravel).addEventListener('click', function() {
//         sidebarClickCheckboxTypeValues(checkboxExcursion, checkboxTravel, checkboxTracking);
//     });

//     document.querySelector(checkboxTracking).addEventListener('click', function() {
//         sidebarClickCheckboxTypeValues(checkboxExcursion, checkboxTravel, checkboxTracking);
//     });
// }

// function sidebarClickCheckboxTypeValues (checkboxExcursion, checkboxTravel, checkboxTracking) {
//     if ( document.querySelector(checkboxExcursion).checked && document.querySelector(checkboxTravel).checked && document.querySelector(checkboxTracking).checked ) {
//         sidebarFirstSumDuring.innerText = "1";
//         sidebarFirstSumPrice.innerText = "1000";
//     } else if ( (document.querySelector(checkboxExcursion).checked && document.querySelector(checkboxTravel).checked) || (document.querySelector(checkboxExcursion).checked && document.querySelector(checkboxTracking).checked) || (document.querySelector(checkboxTravel).checked && document.querySelector(checkboxTracking).checked) ) {
//         sidebarFirstSumDuring.innerText = "1";
//         sidebarFirstSumPrice.innerText = "1000";
//     } else if (document.querySelector(checkboxTravel).checked) {
//         sidebarFirstSumDuring.innerText = "2";
//         sidebarFirstSumPrice.innerText = "7000";

//         if (sidebarSliderDuringOutput.innerText <= sidebarFirstSumDuring.innerText) {
//             sidebarSliderDuringOutput.innerText = sidebarFirstSumDuring.innerText;
//         }
//         if (parseInt(sidebarSliderPriceOutput.innerText) <= parseInt(document.querySelector('#firstSumPrice').innerText)) {
//             sidebarSliderPriceOutput.innerText = document.querySelector('#firstSumPrice').innerText;
//         }
//     } else {
//         sidebarFirstSumDuring.innerText = "1";
//         sidebarFirstSumPrice.innerText = "1000";
//     }
// }


// // =========== 4.4 Input ===========
// function sidebarClickInput (sidebarInput1, sidebarInput2) {

//     const comparisonValueList = [1, 3, 5, 7];
//     const valuesList = [6500, 12500, 23500, 35500];
//     // Взаимодействие между продолжительностью и ценой по продолжительсноти
//     document.querySelector(sidebarInput1).addEventListener('change', function () {

//         sidebarClickInputValue('#slider_during', '#slider_output_during', '#slider_output_price', '#firstSumDuring', comparisonValueList, valuesList)
//     });

//     // Взаимодействие между продолжительностью и ценой по цене
//     document.querySelector(sidebarInput2).addEventListener('change', function () {

//         sidebarClickInputValue('#slider_price', '#slider_output_price', '#slider_output_during', '#firstSumPrice', valuesList, comparisonValueList)

//     });
// }

// function sidebarClickInputValue (sidebarInputSlider, sidebarInputSliderOutput, sidebarInputSliderOutputChange, sidebarInputFirstSum, valueComparisonList, valuesList) {
//     // Отслеживаем изменения ползунка и записываем в output
//     document.querySelector(sidebarInputSliderOutput).innerText = document.querySelector(sidebarInputSlider).value;

//     // проверяем чтобы начальное зн-е было <= конечному
//     if (parseInt(document.querySelector(sidebarInputSliderOutput).innerText) <= parseInt(document.querySelector(sidebarInputFirstSum).innerText)) {
//         document.querySelector(sidebarInputSliderOutput).innerText = document.querySelector(sidebarInputFirstSum).innerText;
//     }

//     // меняем зн-е output в зависимости от продолжительности/стоимости
//     const output = parseInt(document.querySelector(sidebarInputSliderOutput).innerText);
//     const outputChange = document.querySelector(sidebarInputSliderOutputChange);

//     if (output <= valueComparisonList[0]) {
//         outputChange.innerText = valuesList[0];
//     } else if (output <= valueComparisonList[1]) {
//         outputChange.innerText = valuesList[1];
//     } else if (output <= valueComparisonList[2]) {
//         outputChange.innerText = valuesList[2];
//     } else if (output <= valueComparisonList[3]) {
//         outputChange.innerText = valuesList[3];
//     } else {
//         outputChange.innerText = valuesList[3];
//     }
// }


// =========== 4.5 Visible Sidebar ===========
// function visibleSidebar () {
//     let formContainer = document.querySelectorAll('[data-container]');
    
//     for (let myContainer of formContainer) {

//         function Visible () {
//             let myContainerPosition = {
//                 top: window.pageYOffset + myContainer.getBoundingClientRect().top
//                 },
    
//                 windowPosition = {
//                     top: window.pageYOffset
//                 };
    
//             if (myContainerPosition.top > windowPosition.top) {
//                 myContainer.classList.add('active');
//                 sidebar.classList.add('show');
//                 sidebarButton.classList.add('show');
//                 myContainer.before(sidebar);
//                 myContainer.before(sidebarButton);
//             } else {
//                 myContainer.classList.remove('active');
//             };
    
//             let lengthShow = document.querySelectorAll('.active').length;
//             if (lengthShow > 1) {
//                 const showClass = document.querySelectorAll('.active')[0];
//                 showClass.before(sidebar);
//                 showClass.before(sidebarButton);
//             }
//         };
    
//         window.addEventListener('scroll', function() {
//             Visible(formContainer);
//         });
    
//         Visible(formContainer);
//     };
// }


// =========== 4.6 Search__block ===========
// 4.6.1 включить/выключить sidebar
// function runSidebar () {

//     if ( window.innerWidth >= 540 ) {
//         sidebarButton.addEventListener('click', listenSearchButton);
//     } else {
//         sidebarButton.removeEventListener('click', listenSearchButton);

//         sidebarButton.classList.remove('active');
//         sidebar.classList.remove('activeWithoutModal');
//         body.classList.remove('no-scroll');
//     }
// }

// function listenSearchButton() {
    
//     // открываем sidebar
//     sidebarButton.classList.add('active');
//     sidebar.classList.toggle('activeWithoutModal');
//     body.classList.add('scroll');
            
//     // при клике на крестик закрываем sidebar
//     document.querySelector('#sidebar__filter-close').addEventListener('click', function() {

//         sidebarButton.classList.remove('active');
//         sidebar.classList.remove('activeWithoutModal');
//         body.classList.remove('no-scroll');
//     });
// }


// // 4.6.2 включить/выключить sidebar на весь экран
// function runSidebarModal () {

//     if ( window.innerWidth  < 540 ) {
//         sidebarButton.addEventListener('click', listenSearchButtonModal);
//     } else {
//         sidebarButton.removeEventListener('click', listenSearchButtonModal);

//         sidebar.classList.remove('active');
//         body.classList.remove('no-scroll');
//         sidebar.querySelector('.sidebar__filter-bg').classList.remove('active');
//     }
// }

// function listenSearchButtonModal () {
//     // открываем sidebar
//     sidebar.classList.add('active');
//     body.classList.add('no-scroll');

//     setTimeout(function(){
//         sidebar.querySelector('.sidebar__filter-bg').classList.add('active');
//     }, 200)
    
//     // при клике на крестик закрываем sidebar
//     document.querySelector('#sidebar__filter-close').addEventListener('click', function() {

//         sidebar.querySelector('.sidebar__filter-bg').classList.remove('active');

//         setTimeout(function(){
//             sidebar.classList.remove('active');
//             body.classList.remove('no-scroll');
//         }, 200)
//     })

//     // клик снаружи subnav будет закрывать sidebar
//     document.addEventListener('click', function(event) {
//         if (event.target == sidebar) {
//             sidebar.classList.remove('active');
//             body.classList.remove('no-scroll');
//             sidebar.querySelector('.sidebar__filter-bg').classList.remove('active');
//         }
//     });
// }


// // 4.6.3 закрыть все вызываемые sidebar
// function closeRunSidebar () {

//     sidebar.classList.remove('active');
//     sidebarButton.classList.remove('active');
//     sidebar.classList.remove('activeWithoutModal');
//     body.classList.remove('no-scroll');
// }


/* ===== 5. Modals =====================================
======================================================*/
// function showModal (dataOpen, dataClose, showClass,
//     scroll, divShowClass, parentClass) {
//     const modalQestionCall = document.querySelectorAll(dataOpen);
//     const modalQestionClose = document.querySelectorAll(dataClose);


//     // 5.1 открываем наше модальное окно при нажатии на кнопку галлереи
//     modalQestionCall.forEach(function(item) {
//         item.addEventListener('click', function(event) {
//             event.preventDefault();

//             const modalId = this.dataset.modal;

//             document.querySelector(modalId).classList.add(showClass);
//             body.classList.add(scroll);

//             const parent = document.querySelector(modalId);

//             setTimeout(function() {
//                 parent.querySelector(divShowClass).style.transform = 'rotate(0)'
//             }, 200);

//             // slick slider
//             new Sim(modalId, '.modal__slider-list', '.modal__slider-element', '.slickPrev', '.slickNext', '.modal__slider-dots', {
//                 loop: true,     // Бесконечное зацикливание слайдера
//                 auto: false,     // Автоматическое пролистывание
//                 interval: 5000, // Интервал между пролистыванием элементов (мс)
//                 arrows: true,   // Пролистывание стрелками
//                 dots: true      // Индикаторные точки
//             })

//             // добавляем оригинальные стили к dots
//             parent.querySelectorAll('.sim-dot').forEach(function(item) {
//                 item.classList.add('modal-dots');
//             });
//         })
//     });


//     // 5.2 закрываем наше модальное окно при нажатии на крестик
//     modalQestionClose.forEach(function(item) {
//         item.addEventListener('click', function(event) {
//             event.preventDefault();

//             const parent = item.closest(parentClass);

//             parent.querySelector(divShowClass).style.transform = 'rotateX(90deg)';

//             setTimeout(function() {
//                 parent.classList.remove(showClass);
//                 body.classList.remove(scroll);
//             }, 200);

//         })
//     });
    

//     // 5.3 закрываем наше модальное окно, если мы кликнули вне его содержимого
//     document.querySelectorAll(parentClass).forEach(function(item) {
//         item.addEventListener('click', function(event) {
//             if (event.target == item) {
//                 const parent = item.closest(parentClass);      

//                 parent.querySelector(divShowClass).style.transform = 'rotateX(90deg)';

//                 setTimeout(function() {
//                     parent.classList.remove(showClass);
//                     body.classList.remove(scroll);
//                 }, 200);
//             }

//         })
//     });
// }


/* ===== 6. Button Up =====================================
======================================================*/
// function up() {
//     let timeOutScroll;
//     const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
//     if ( top > 1500 ) {
//         window.scrollBy(0, -500);
//         timeOutScroll = setTimeout('up()', 10);
//     } else if ( top > 0 ) {
//         window.scrollBy(0, -100);
//         timeOutScroll = setTimeout('up()', 10);
//     } else clearTimeout(timeOutScroll);
//     return false;
// }


/* ===== 7. Footer Buttons =================================
======================================================*/
// // =========== 7.1 Click Footer Send Button ===========
// function clickFooterSendButton (button, buttonHtml, text, textShort) {
//     button.addEventListener('click', function() {
//         const hidden = buttonHtml.querySelector('.form__header-text');

//         shortText (hidden, text, textShort);
        
//         // открываем вопросник
//         if (text == "Написать нам") {
//             if ( window.innerWidth >= 490 ) {
//                 buttonHtml.classList.add('show');
//             } else {
//                 buttonHtml.classList.remove('show');
//             };

//             window.addEventListener ("resize", function() {   
//                 if ( window.innerWidth >= 490 ) {
//                     buttonHtml.classList.add('show');
//                 } else {
//                     buttonHtml.classList.remove('show');
//                 };
//             });            
//         } else {
//             buttonHtml.classList.add('show');
//         };
    
//         setTimeout(function(){
//             buttonHtml.querySelector('.question').classList.add('show');
//         }, 200)
    
//         // закрываем вопросник при нажатии на крестик
//         buttonHtml.querySelector('.modal__close').addEventListener('click', function() {
//             buttonHtml.querySelector('.question').classList.remove('show');
    
//             setTimeout(function(){
//                 buttonHtml.classList.remove('show');
//             }, 200);
//         });
    
//         // клик снаружи question будет закрывать вопросник
//         document.addEventListener('click', function(event) {
//             if (event.target == buttonHtml || event.target == buttonHtml.querySelector('.question')) {
//                 buttonHtml.querySelector('.question').classList.remove('show');
    
//                 setTimeout(function(){
//                     buttonHtml.classList.remove('show');
//                 }, 200);
//             };
//         });
//     });
// };


// // =========== 7.2 Dropdown Click Button Send ===========
// function dropdownSendForm (formDropdown, dropdownButton, answerText, answerTextShort) {
//     const formDropdownSend = document.querySelector(formDropdown);
//     const dropdownButtonSend = document.querySelector(dropdownButton);
//     const dropdownListSend = formDropdownSend.querySelector('.dropdown__list');

//     shortText (dropdownButtonSend, answerText, answerTextShort);

//     clickDropdownButton (dropdownButtonSend, dropdownListSend, answerText, answerTextShort);
// };

// function clickDropdownButton (button, dropdownListSend, answerText, answerTextShort) {
//     const hidden = dropdownListSend.querySelector('[data-value]');
//     const dropDownListItems = dropdownListSend.querySelectorAll('.dropdown__list-item');

//     button.addEventListener('click', function(){
//         shortText (hidden, answerText, answerTextShort);

//         dropdownListSend.classList.toggle('dropdown__list--visible');
//         this.classList.add('dropdown__button--active');
//         clickDropDown (dropDownListItems, button, dropdownListSend);
//     });
// };

// function shortText (button, answerText, answerTextShort) {
//     choiceTextShort (button, answerText, answerTextShort);

//     window.addEventListener ("resize", function() {   
//         choiceTextShort (button, answerText, answerTextShort);
//     });
// };

// function choiceTextShort (button, answerText, answerTextShort) {
//     if ( window.innerWidth >= 490 ) {
//         button.innerText = answerText;
//     } else {
//         button.innerText = answerTextShort;
//     };
// };

// // =========== 7.3 Dropdown Click Button Dropdown ===========
// function clickDropDown (dropDownListItems, dropDownBtn, dropDownList, funChoice) {
    
//     // Выбор эл-та из списка. Запомнить выбранное зн-е. Закрыть dropdown
//     dropDownListItems.forEach(function (listItem) {
//         listItem.addEventListener('click', function(event) {
//             event.stopPropagation();
//             dropDownBtn.innerText = this.innerText; 
    
//             if (typeof funChoice != 'undefined') {
//                 const choiceText =  dropDownBtn.innerText;
//                 funChoice (choiceText);
//             };
//             // const choiceText =  dropDownBtn.innerText;
//             // funChoice (choiceText);
    
//             dropDownBtn.focus();
//             dropDownList.classList.remove('dropdown__list--visible');
//             // dropdownInput = this.dataset;
//             const choice = listItem.dataset.value;

//             if (choice == 'null') {
//                 dropDownBtn.classList.add('null');
//             } else {
//                 dropDownBtn.classList.remove('null');
//             };
//         });    
//     });

//     // Клик снаружи dropdown будет закрывать dropdown
//     document.addEventListener('click', function(event) {
//         // если мы кликнули не по кнопке, то мы скрываем активный класс кнопки и скрываем list
//         if (event.target !== dropDownBtn) {
//             dropDownBtn.classList.remove('dropdown__button--active');
//             dropDownList.classList.remove('dropdown__list--visible');
//         };
//     });

//     // Добавляем работу клавиш esc и tab с нашим выпадающим списком
//     document.addEventListener('keydown', function(e){
//         if (e.key === 'Tab' || e.key === 'Escape') { // свойство key - означает зн-е клавиши, на к. мы нажали
//             dropDownBtn.classList.remove('dropdown__button--active');
//             dropDownList.classList.remove('dropdown__list--visible');
//         };
//     });
// };
