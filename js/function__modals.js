/* ===== Modals =====================================
======================================================*/
function showModal (dataOpen, dataClose, showClass,
    scroll, divShowClass, parentClass) {
    const modalQestionCall = document.querySelectorAll(dataOpen);
    const modalQestionClose = document.querySelectorAll(dataClose);

    // 1. открываем наше модальное окно при нажатии на кнопку галлереи
    modalQestionCall.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            const modalId = this.dataset.modal;

            document.querySelector(modalId).classList.add(showClass);
            body.classList.add(scroll);

            const parent = document.querySelector(modalId);

            setTimeout(function() {
                parent.querySelector(divShowClass).style.transform = 'rotate(0)'
            }, 200);

            // slick slider
            new Sim(modalId, '.modal__slider-list', '.modal__slider-element', '.slickPrev', '.slickNext', '.modal__slider-dots', {
                loop: true,     // Бесконечное зацикливание слайдера
                auto: false,     // Автоматическое пролистывание
                interval: 5000, // Интервал между пролистыванием элементов (мс)
                arrows: true,   // Пролистывание стрелками
                dots: true      // Индикаторные точки
            });

            // добавляем оригинальные стили к dots
            parent.querySelectorAll('.sim-dot').forEach(function(item) {
                item.classList.add('modal-dots');
            });
        });
    });

    // 2. закрываем наше модальное окно при нажатии на крестик
    modalQestionClose.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            const parent = item.closest(parentClass);

            parent.querySelector(divShowClass).style.transform = 'rotateX(90deg)';

            setTimeout(function() {
                parent.classList.remove(showClass);
                body.classList.remove(scroll);
            }, 200);
        });
    });

    // 3. закрываем наше модальное окно, если мы кликнули вне его содержимого
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