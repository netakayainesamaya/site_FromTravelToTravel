/* ========== Variables ===================
=========================================*/
// ========== 1. Main Variables ==========
const constructorToursSearchButton = document.querySelector('#search');

// ========== 2. Sidebar ==========
// ========== 2.1 Main ==========
const sidebar = document.querySelector('#sidebar');
const sidebarButton = document.querySelector('#search-button-filter');
const sidebarSearchButton = document.querySelector('#searchFilter');

// ========== 2.2 During ==========
const sidebarSliderDuring = document.querySelector('#slider_during');
const sidebarFirstSumDuring = document.querySelector('#firstSumDuring');
const sidebarFirstSumText = document.querySelector('#firstSumText');
const sidebarFinishSumText = document.querySelector('#finishSumText');
const sidebarSliderDuringOutput = document.querySelector('#slider_output_during');

// ========== 2.3 Price ==========
const sidebarSliderPrice = document.querySelector('#slider_price');
const sidebarFirstSumPrice = document.querySelector('#firstSumPrice');
const sidebarSliderPriceOutput = document.querySelector('#slider_output_price');


/* ===== 2. Sidebar =======================================
======================================================*/
// =========== 2.1 Sidebar Filter ===========
function sidebarSearchButtonClick (button) {
    button.addEventListener('click', function () {
    
        // параметры выбранные пользователем
        const duringSidebarValueStart = parseInt(sidebarFirstSumDuring.innerText);
        const duringSidebarValueFinish = parseInt(sidebarSliderDuringOutput.innerText);
        const typeSidebarList =  checkboxValue('[data-checktype]');
        const priceSidebarValueStart = parseInt(sidebarFirstSumPrice.innerText);
        const priceSidebarValueFinish = parseInt(sidebarSliderPriceOutput.innerText);
    
        let listGeneralFilterShow = [];
    
        document.querySelectorAll('.preview__container').forEach(function(item) {
            // параметры контейнера
            const duringContainerValue = parseInt(item.dataset.days);
            const typeContainerValue = item.querySelector('.type__text').innerText;
            const priceContainerValue = parseInt(item.querySelector('.price').innerText);
    
            if ( typeSidebarList.length > 2 || typeSidebarList.length == 0 ) {
                if ( duringSidebarValueStart <= duringContainerValue && duringContainerValue <= duringSidebarValueFinish && priceSidebarValueStart <= priceContainerValue && priceContainerValue <= priceSidebarValueFinish ) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            } else if ( typeSidebarList.length > 1 ) {
                if ( duringSidebarValueStart <= duringContainerValue && duringContainerValue <= duringSidebarValueFinish && priceSidebarValueStart <= priceContainerValue && priceContainerValue <= priceSidebarValueFinish && (typeSidebarList[0] == typeContainerValue || typeSidebarList[1] == typeContainerValue) ) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            } else if ( typeSidebarList.length > 0 ) {
                if ( duringSidebarValueStart <= duringContainerValue && duringContainerValue <= duringSidebarValueFinish && priceSidebarValueStart <= priceContainerValue && priceContainerValue <= priceSidebarValueFinish && typeSidebarList[0] == typeContainerValue ) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            }  
            
            if ( document.querySelector('title').innerText == "FromTravelToTravel" && item.classList.contains('hide') == false ) {
                listGeneralFilterShow.push(item);
            };
        });
    
        // показывать/скрывать кнопки Pagination и Button More
        if (document.querySelector('title').innerText == "FromTravelToTravel") {
            showHidePaginationButtonMore (listGeneralFilterShow);
        };

        // клик на кнопку Найти закрывает sidebar
        sidebar.querySelector('.sidebar__filter-bg').classList.remove('active');

        setTimeout(function(){
            sidebar.classList.remove('active');
            body.classList.remove('no-scroll');
        }, 200);
    });
};


// =========== 2.2 Обнуляем выбор пользователя из Sidebar ===========
function nullSidebar () {
    document.querySelectorAll('[data-checktype]').forEach(function(checkbox) {
        checkbox.checked = false;
    });

    document.querySelectorAll('[data-checkformat]').forEach(function(checkbox) {
        checkbox.checked = false;
    });

    sidebarSliderDuring.value = 1;
    sidebarFirstSumDuring.innerText = '1'
    sidebarSliderDuringOutput.innerText = '7';

    sidebarSliderPrice.value = 1;
    sidebarFirstSumPrice.innerText = '1000'
    sidebarSliderPriceOutput.innerText = '35000';
};


// =========== 2.3 Получаем зн-е выбранного чекбокса ===========
function checkboxValue (dataCheckbox) {
    let checkboxValuesList = [];
    document.querySelectorAll(dataCheckbox).forEach (function (item) {

        if ( item.checked ) {
            const parent = item.parentElement;
            checkboxValuesList.push(parent.querySelector('.checkbox__text').innerText);
        };
    });

    return checkboxValuesList;
};


// =========== 2.4 Checkbox ===========
function sidebarClickCheckboxType (checkboxExcursion, checkboxTravel, checkboxTracking) {

    document.querySelector(checkboxExcursion).addEventListener('click', function() {
        sidebarClickCheckboxTypeValues(checkboxExcursion, checkboxTravel, checkboxTracking);
    });

    document.querySelector(checkboxTravel).addEventListener('click', function() {
        sidebarClickCheckboxTypeValues(checkboxExcursion, checkboxTravel, checkboxTracking);
    });

    document.querySelector(checkboxTracking).addEventListener('click', function() {
        sidebarClickCheckboxTypeValues(checkboxExcursion, checkboxTravel, checkboxTracking);
    });
};

function sidebarClickCheckboxTypeValues (checkboxExcursion, checkboxTravel, checkboxTracking) {
    if ( document.querySelector(checkboxExcursion).checked && document.querySelector(checkboxTravel).checked && document.querySelector(checkboxTracking).checked ) {
        sidebarFirstSumDuring.innerText = "1";
        sidebarFirstSumPrice.innerText = "1000";
    } else if ( (document.querySelector(checkboxExcursion).checked && document.querySelector(checkboxTravel).checked) || (document.querySelector(checkboxExcursion).checked && document.querySelector(checkboxTracking).checked) || (document.querySelector(checkboxTravel).checked && document.querySelector(checkboxTracking).checked) ) {
        sidebarFirstSumDuring.innerText = "1";
        sidebarFirstSumPrice.innerText = "1000";
    } else if (document.querySelector(checkboxTravel).checked) {
        sidebarFirstSumDuring.innerText = "3";
        sidebarFirstSumPrice.innerText = "7000";

        if (sidebarSliderDuringOutput.innerText <= sidebarFirstSumDuring.innerText) {
            sidebarSliderDuringOutput.innerText = sidebarFirstSumDuring.innerText;
        };

        if (parseInt(sidebarSliderPriceOutput.innerText) <= parseInt(document.querySelector('#firstSumPrice').innerText)) {
            sidebarSliderPriceOutput.innerText = document.querySelector('#firstSumPrice').innerText;
        };
    } else {
        sidebarFirstSumDuring.innerText = "1";
        sidebarFirstSumPrice.innerText = "1000";
    };

    if ( sidebarFirstSumDuring.innerText == "1" ) {
        sidebarFirstSumText.innerText = "дня";
    } else {
        sidebarFirstSumText.innerText = "дней";
    };

    if ( sidebarSliderDuringOutput.innerText == "1") {
        sidebarFinishSumText.innerText = "дня";
        sidebarSliderDuringOutput.classList.add('right');
    } else {
        sidebarFinishSumText.innerText = "дней";
        sidebarSliderDuringOutput.classList.remove('right');
    };
};


// =========== 2.5 Input ===========
function sidebarClickInput (sidebarInput1, sidebarInput2) {

    const comparisonValueList = [1, 3, 5, 7];
    const valuesList = [6500, 12500, 23500, 35500];
    // Взаимодействие между продолжительностью и ценой по продолжительсноти
    document.querySelector(sidebarInput1).addEventListener('change', function () {

        sidebarClickInputValue('#slider_during', '#slider_output_during', '#slider_output_price', '#firstSumDuring', comparisonValueList, valuesList)
    });

    // Взаимодействие между продолжительностью и ценой по цене
    document.querySelector(sidebarInput2).addEventListener('change', function () {

        sidebarClickInputValue('#slider_price', '#slider_output_price', '#slider_output_during', '#firstSumPrice', valuesList, comparisonValueList)

    });
};

function sidebarClickInputValue (sidebarInputSlider, sidebarInputSliderOutput, sidebarInputSliderOutputChange, sidebarInputFirstSum, valueComparisonList, valuesList) {
    // Отслеживаем изменения ползунка и записываем в output
    document.querySelector(sidebarInputSliderOutput).innerText = document.querySelector(sidebarInputSlider).value;

    // проверяем чтобы начальное зн-е было <= конечному
    if (parseInt(document.querySelector(sidebarInputSliderOutput).innerText) <= parseInt(document.querySelector(sidebarInputFirstSum).innerText)) {
        document.querySelector(sidebarInputSliderOutput).innerText = document.querySelector(sidebarInputFirstSum).innerText;
    }

    // меняем зн-е output в зависимости от продолжительности/стоимости
    const output = parseInt(document.querySelector(sidebarInputSliderOutput).innerText);
    const outputChange = document.querySelector(sidebarInputSliderOutputChange);

    if (output <= valueComparisonList[0]) {
        outputChange.innerText = valuesList[0];
    } else if (output <= valueComparisonList[1]) {
        outputChange.innerText = valuesList[1];
    } else if (output <= valueComparisonList[2]) {
        outputChange.innerText = valuesList[2];
    } else if (output <= valueComparisonList[3]) {
        outputChange.innerText = valuesList[3];
    } else {
        outputChange.innerText = valuesList[3];
    };

    if ( sidebarSliderDuringOutput.innerText == "1") {
        sidebarFinishSumText.innerText = "дня";
        sidebarSliderDuringOutput.classList.add('right');
    } else {
        sidebarFinishSumText.innerText = "дней";
        sidebarSliderDuringOutput.classList.remove('right');
    };
};


// =========== 2.6 Visible Sidebar ===========
function visibleSidebar () {
    let formContainer = document.querySelectorAll('[data-container]');
    
    for (let myContainer of formContainer) {

        function Visible () {
            let myContainerPosition = {
                top: window.pageYOffset + myContainer.getBoundingClientRect().top
                },
    
                windowPosition = {
                    top: window.pageYOffset
                };
    
            if (myContainerPosition.top > windowPosition.top) {
                myContainer.classList.add('active');
                sidebar.classList.add('show');
                sidebarButton.classList.add('show');
                myContainer.before(sidebar);
                myContainer.before(sidebarButton);
            } else {
                myContainer.classList.remove('active');
            };
    
            let lengthShow = document.querySelectorAll('.active').length;
            if (lengthShow > 1) {
                const showClass = document.querySelectorAll('.active')[0];
                showClass.before(sidebar);
                showClass.before(sidebarButton);
            };
        };
    
        window.addEventListener('scroll', function() {
            Visible(formContainer);
        });
    
        Visible(formContainer);
    };
};


// =========== 2.7 Search__block ===========
// 2.7.1 включить/выключить sidebar
function runSidebar () {

    if ( window.innerWidth >= 540 ) {
        sidebarButton.addEventListener('click', listenSearchButton);
    } else {
        sidebarButton.removeEventListener('click', listenSearchButton);

        sidebarButton.classList.remove('active');
        sidebar.classList.remove('activeWithoutModal');
        body.classList.remove('no-scroll');
    };
};

function listenSearchButton() {
    
    // открываем sidebar
    sidebarButton.classList.add('active');
    sidebar.classList.toggle('activeWithoutModal');
    body.classList.add('scroll');
            
    // при клике на крестик закрываем sidebar
    document.querySelector('#sidebar__filter-close').addEventListener('click', function() {

        sidebarButton.classList.remove('active');
        sidebar.classList.remove('activeWithoutModal');
        body.classList.remove('no-scroll');
    });
};


// 2.7.2 включить/выключить sidebar на весь экран
function runSidebarModal () {

    if ( window.innerWidth  < 540 ) {
        sidebarButton.addEventListener('click', listenSearchButtonModal);
    } else {
        sidebarButton.removeEventListener('click', listenSearchButtonModal);

        sidebar.classList.remove('active');
        body.classList.remove('no-scroll');
        sidebar.querySelector('.sidebar__filter-bg').classList.remove('active');
    };
};

function listenSearchButtonModal () {
    // открываем sidebar
    sidebar.classList.add('active');
    body.classList.add('no-scroll');

    setTimeout(function(){
        sidebar.querySelector('.sidebar__filter-bg').classList.add('active');
    }, 200);
    
    // при клике на крестик закрываем sidebar
    document.querySelector('#sidebar__filter-close').addEventListener('click', function() {

        sidebar.querySelector('.sidebar__filter-bg').classList.remove('active');

        setTimeout(function(){
            sidebar.classList.remove('active');
            body.classList.remove('no-scroll');
        }, 200);
    });

    // клик снаружи subnav будет закрывать sidebar
    document.addEventListener('click', function(event) {
        if (event.target == sidebar) {
            sidebar.classList.remove('active');
            body.classList.remove('no-scroll');
            sidebar.querySelector('.sidebar__filter-bg').classList.remove('active');
        };
    });
};


// 2.7.3 закрыть все вызываемые sidebar
function closeRunSidebar () {
    sidebar.classList.remove('active');
    sidebarButton.classList.remove('active');
    sidebar.classList.remove('activeWithoutModal');
    body.classList.remove('no-scroll');
};


/* ===== Sidebar, SearchButton Show, RESIZE ============
======================================================*/
if ( window.innerWidth >= 1400 ) {
    // прекращем показывать sidebar при клике на searchbutton
    closeRunSidebar();

} else {
    // показываем sidebar при клике на searchbutton
    runSidebar();
    runSidebarModal();

};

window.addEventListener ("resize", function() {

    if ( window.innerWidth >= 1400 ) {
        // прекращем показывать sidebar при клике на searchbutton
        closeRunSidebar();
    
    } else {
        // показываем sidebar при клике на searchbutton
        runSidebar();
        runSidebarModal();
    
    };
});


/* ===== Sidebar Main ==================================
======================================================*/
// =========== 1. Отслеживаем движение ползунков и checkbox ===========
sidebarClickCheckboxType ('#checkbox_3', '#checkbox_4', '#checkbox_5');
sidebarClickInput ('#sidebarSliderDuring', '#sidebarSliderPrice');

// =========== 2. Sidebar Filter ===========
sidebarSearchButtonClick(sidebarSearchButton);
