/* ========== Variables ===================
=========================================*/
const title = document.querySelector('title').innerText;

const buttonEtc = document.querySelector('#etc-calendar');
const hiddenDate = document.querySelector('#hidden__date');
const buttonClose = document.querySelector('#roll__up');

const hiddenDate1 = document.querySelector('#hidden__date1');

const itemsContainer = document.querySelector('.items__container-map');
const sendButton = document.querySelector('#send__button-top');

const upButton = document.querySelector('#upbtn');


/* ===== Slider Greeting, SearchButton, Nav-toggle =====
======================================================*/

if ( window.innerWidth >= 540 ) {
    // прекращаем функцию вызова nav-toggle 
    closeNavToggle();

} else if ( window.innerWidth < 540 ) {
    // показываем меню nav-toggle
    openNavToggle();
};


/* ===== RESIZE ========================================
======================================================*/

window.addEventListener ("resize", function() {

    buttonEtcCloseNull (buttonEtc, hiddenDate, buttonClose, itemsContainer, sendButton);
    buttonEtcCloseNull (buttonEtc, hiddenDate1, buttonClose, itemsContainer, sendButton);

    if ( window.innerWidth >= 540 ) {
        // прекращаем функцию вызова nav-toggle 
        closeNavToggle();

    } else if ( window.innerWidth < 540 ) {
        // показываем меню nav-toggle
        openNavToggle();
    };
});


/* ===== Function Render ===============================
======================================================*/
function addInnerText (toursArrayId) {
    const transition = document.querySelector('#transition');

    const subtitle = document.querySelector('#subtitle');
    const previewDescription = document.querySelector('#previewDescription');
    const previewDescriptionShort = document.querySelector('#previewDescriptionShort');
    const dataCost = document.querySelectorAll('[data-cost]');
    const costAlone = document.querySelector('#costAlone');
    const day = document.querySelector('#day');
    const night = document.querySelector('#night');
    const iconFirst = document.querySelector('#icon-first');
    const iconSecond = document.querySelector('#icon-second');

    const transitionHTML = `<a class="transition__title" href="../${toursArrayId.link}.html">${toursArrayId.type}</a>
                            <div class="transition__arrows">
                                <svg class="transition__arrow">
                                    <use xlink:href="#transition-arrow"></use>
                                </svg>
                            </div>
                            <div class="transition__text">${toursArrayId.title}</div>
                            <div class="transition__text  transition__text--short">${toursArrayId.titleShort}</div>`;

    transition.insertAdjacentHTML('beforeend', transitionHTML);

    subtitle.innerText = `Описание ${toursArrayId.typeDescription}:`;
    previewDescription.innerText = toursArrayId.previewDescription;
    previewDescriptionShort.innerText = toursArrayId.previewDecriptionShort;
    dataCost.forEach(function(element) {
        element.innerText = toursArrayId.cost;
    });
    costAlone.innerText = toursArrayId.costAlone;
    day.innerText = toursArrayId.days;
    night.innerText = toursArrayId.night;

    addIcon(iconFirst, toursArrayId.iconFirst);
    addIcon(iconSecond, toursArrayId.iconSecond);

    function addIcon (container, icon) {
        const iconHTML = `<use xlink:href="#${icon}"></use>`;
        container.insertAdjacentHTML('beforeend', iconHTML);
    }
};


/* ===== Button Etc ====================================
======================================================*/
function buttonEtcClick (buttonEtc, hiddenDate, buttonClose, itemsContainer, sendButton, funVisible) {
    buttonEtc.addEventListener('click', function() {
        hiddenDate.classList.add('show');
        buttonEtc.classList.remove('show');
        buttonClose.classList.add('show');
        itemsContainer.classList.add('height');
        
        if ( window.innerWidth >= 1200 ) {
            sendButton.classList.add('mt');
        };

        if (typeof funVisible != "undefined") {
            funVisible(form);
        };
    });
};

function buttonEtcClose (buttonEtc, hiddenDate, buttonClose, itemsContainer, sendButton) {
    buttonClose.addEventListener('click', function() {
        hiddenDate.classList.remove('show');
        buttonEtc.classList.add('show');
        buttonClose.classList.remove('show');
        itemsContainer.classList.remove('height');

        if ( window.innerWidth >= 1200 ) {
            sendButton.classList.remove('mt');
        };
    });
};

function buttonEtcCloseNull (buttonEtc, hiddenDate, buttonClose, itemsContainer, sendButton) {
    hiddenDate.classList.remove('show');
    buttonEtc.classList.add('show');
    buttonClose.classList.remove('show');
    itemsContainer.classList.remove('height');

    if ( window.innerWidth >= 1200 ) {
        sendButton.classList.remove('mt');
    };
};


// buttonEtcClick (buttonEtc, hiddenDate, buttonClose, itemsContainer, sendButton);
buttonEtcClose (buttonEtc, hiddenDate, buttonClose, itemsContainer, sendButton);

buttonEtcClick (buttonEtc, hiddenDate1, buttonClose, itemsContainer, sendButton);
buttonEtcClose (buttonEtc, hiddenDate1, buttonClose, itemsContainer, sendButton);


/* ===== Button Up =======================================
======================================================*/
upButton.addEventListener('click', function() {
    up();
});