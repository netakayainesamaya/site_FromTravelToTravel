/* ========== Variables ===================
=========================================*/
const form = document.querySelector('#form');

const expectation = document.querySelector('#expectation');
const details = document.querySelector('#details');

const questionItem = document.querySelectorAll('.excursion__item');

const question = document.querySelector('#question');
const questionBg = document.querySelector('#question-bg');


/* ===== Render Tours ==================================
======================================================*/
if (title == 'Симеиз') {
    getTours(0);
} else if (title == 'Закат на Ай-Петри') {
    getTours(1);
} else if (title == 'Трекинг к Южной Демерджи') {
    getTours(2);
} else if (title == 'Мангуп-Кале') {
    getTours(3);
} else if (title == 'Бирюзовое озеро') {
    getTours(4);
} else if (title == 'Сырные скалы') {
    getTours(5);
} else if (title == 'Утёс "Санта-Барбара"') {
    getTours(6);
} else if (title == 'Курортная Алупка') {
    getTours(7);
} else if (title == 'Храм Солнца') {
    getTours(8);
} else if (title == 'Боткинская тропа') {
    getTours(9);
} else if (title == 'Большой Каньон') {
    getTours(10);
} else if (title == 'Ущелье Уч-Кош') {
    getTours(11);
} else if (title == 'Затерянный мир Айя') {
    getTours(12);
} else if (title == '"Крымская Швейцария"') {
    getTours(13);
} else if (title == 'К вершинам Чатыр-Дага') {
    getTours(14);
} else if (title == 'Крымское Ханство') {
    getTours(15);
} else if (title == 'Мраморные пещеры') {
    getTours(16);
} else if (title == 'Идиальный Южный берег') {
    getTours(17);
} else if (title == 'Эски-Кермен') {
    getTours(18);
};


/* ===== Functions =====================================
======================================================*/
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


/* ===== Button Etc ====================================
======================================================*/
buttonEtcClick (buttonEtc, hiddenDate, buttonClose, itemsContainer, sendButton, visibleForm);


/* ===== Visible Form ==================================
======================================================*/
visibleForm(form);

function visibleForm (form) {
    const myContainer = document.querySelector('.items__container-map');
    const excursion = document.querySelector('.excursion__buttons');
    const sendButton = document.querySelector('#send__button-top');

    function Visible () {
        let myContainerPosition = {
                top: window.pageYOffset + myContainer.getBoundingClientRect().top
            },

            windowPosition = {
                top: window.pageYOffset
            };

        if (myContainerPosition.top > windowPosition.top) {
            form.classList.remove('show');
            myContainer.after(form);
            if (myContainer.classList.contains('height')) {
                sendButton.classList.add('mt');  
            }   
        } else {
            form.classList.add('show');
            excursion.before(form);  
            sendButton.classList.remove('mt');       
        };
    };
    
    window.addEventListener('scroll', function() {
        Visible(myContainer);
    });

    Visible(myContainer);
};


/* ===== Modals =====================================
======================================================*/
function showModal (dataOpen, dataClose, showClass,
    scroll, divShowClass, parentClass) {
    const modalQestionCall = document.querySelector(dataOpen);
    const modalQestionClose = document.querySelector(dataClose);
    const parent = document.querySelector(parentClass);


    // 6.1 открываем наше модальное окно при нажатии на кнопку галлереи
    modalQestionCall.addEventListener('click', function(event) {
        event.preventDefault();

        const modal = parent.id;
        const modalId = `#${modal}`;

        parent.classList.add(showClass);
        body.classList.add(scroll);

        setTimeout(function() {
            parent.querySelector(divShowClass).style.transform = 'rotate(0)'
        }, 200);

        // slick slider
        new Sim(modalId, '.modal__slider-list', '.modal__slider-element', '.slickPrev', '.slickNext', '.modal__slider-dots', {
            loop: true,     // Бесконечное зацикливание слайдера
            auto: false,     // Автоматическое пролистывание
            interval: 2000, // Интервал между пролистыванием элементов (мс)
            arrows: true,   // Пролистывание стрелками
            dots: true      // Индикаторные точки
        });

        // добавляем оригинальные стили к dots
        parent.querySelectorAll('.sim-dot').forEach(function(item) {
            item.classList.add('modal-dots');
        });
    });


    // 6.2 закрываем наше модальное окно при нажатии на крестик
    modalQestionClose.addEventListener('click', function(event) {
        event.preventDefault();

        const parent = modalQestionClose.closest(parentClass);

        parent.querySelector(divShowClass).style.transform = 'rotateX(90deg)';

        setTimeout(function() {
            parent.classList.remove(showClass);
            body.classList.remove(scroll);
        }, 200);
    });
    

    // 6.3 закрываем наше модальное окно, если мы кликнули вне его содержимого
    document.querySelectorAll(parentClass).forEach(function(item) {
        item.addEventListener('click', function(event) {
            if (event.target == item) {
                const parent = item.closest(parentClass);      

                parent.querySelector(divShowClass).style.transform = 'rotateX(90deg)';

                setTimeout(function() {
                    parent.classList.remove(showClass);
                    body.classList.remove(scroll);
                }, 200);
            };
        });
    });
};


/* ===== Footer Buttons ================================
======================================================*/
// ========== 1. Click Footer Buttons ===========
clickFooterSendButton (call, callUs, "Обратный звонок", "Звонок");

dataSend.forEach(function(item) {
    clickFooterSendButton (item, rightUs, "Написать нам", "Написать");
});

// ========== 2. Click Question Button ===========
clickFooterSendButton(question, questionBg, "Вопрос \u2013 ответ", "Вопрос");

// ========== 3. Dropdown Footer Form ===========
dropdownSendForm ('#formDropdownCall', '#dropdownButtonCall', 'Выбрать удобное время:', 'Удобное время:');
dropdownSendForm ('#formDropdownSend', '#dropdownButtonSend', 'Выбрать удобную форму ответа:', 'Форма ответа:');

// ========== 2. Dropdown Question Form ===========
dropdownSendForm ('#formDropdown', '#dropdownButton', 'Выбрать удобную форму ответа:', "Форма ответа");
