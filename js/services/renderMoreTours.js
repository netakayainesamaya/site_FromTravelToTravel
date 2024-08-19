// ========== Variables ==========
const moreToursContainer = document.querySelector('.slider__items');

getMoreTours();

// Ассинхронная функция получения данных из файла products.json
async function getMoreTours() {
    let link;
    let basePath = window.location.pathname.includes('/tours/') ? '../' : '';
    

    if (document.querySelector('title').innerText == 'Экскурсии с гидом') {
        link = `${basePath}js/services/excursions.json`;  // Шаблонная строка
    } else if (document.querySelector('title').innerText == 'Туры по Крыму') {
        link = `${basePath}js/services/tours.json`;  // Шаблонная строка
    } else if (document.querySelector('title').innerText == 'Активный отдых') {
        link = `${basePath}js/services/tracking.json`;  // Шаблонная строка
    } else {
        link = `${basePath}js/services/more__tours.json`;  // Шаблонная строка
    };

    // Получаем данные из products.json
    const responce = await fetch(link);

    // Парсим данные из JSON формата в JS
    const toursArray = await responce.json();

    // Запускаем ф-ю рендера (отображения товаров)
    renderTours(toursArray);

    new ChiefSlider('#more__tours-slider', '.more__tours-wrapper', '.slider__items', '.slider__item', '.slider__control[data-slide="prev"]', '.slider__control[data-slide="next"]', {
        loop: true,
        autoplay: true
    });
}

function renderTours(toursArray) {
    toursArray.forEach(function (item) {

        let basePath = window.location.pathname.includes('/tours/') ? '../' : '';

        const toursHTML =  `<a class="slider__item" href="${basePath}tours/post-${item.picture}.html">
                                <div class="more__tours-item-bg">
                                    <div class="more__tours-mask">
                                        <picture class="more__img">
                                            <source srcset="${basePath}img/post/post-${item.picture}/${item.picture}-sm@1x.webp 1x, ${basePath}img/post/post-${item.picture}/${item.picture}-sm@2x.webp 2x" type="image/webp">
                                            <img src="${basePath}img/post/post-${item.picture}/${item.picture}-sm@1x.jpg" srcset="${basePath}img/post/post-${item.picture}/${item.picture}-sm@1x.jpg 1x, ${basePath}img/post/post-${item.picture}/${item.picture}-sm@2x.jpg 2x" alt="">
                                        </picture>

                                        <div class="more__link-text">
                                            <div class="more__item-title">${item.title}</div>
                                            <div class="more__item-title  more__item-title--short">${item.shortTitle}</div>
                                            <div class="more__item-text">${item.price}</div>
                                        </div>
                                    </div>
                                </div>
                            </a>`;

        moreToursContainer.insertAdjacentHTML('beforeend', toursHTML);
    });
}

