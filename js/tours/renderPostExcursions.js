// Ассинхронная функция получения данных из файла post-tours.json
async function getTours(id) {
    // Получаем данные из products.json
    const responce = await fetch('post-excursions.json');

    // Парсим данные из JSON формата в JS
    const toursArray = await responce.json();

    // Выбираем нужный нам тур
    const toursArrayId = toursArray[id];

    // Добавляем текст title, description, descriptionShort, cost, costAlone, days, night
    addInnerText(toursArrayId);

    // Добавляем катру маршрута
    addMap(toursArrayId);

    // Добавляем даты
    addDataAll(toursArrayId);

    // Добавляем описание экскурсии и описание деталей
    addExpectation(toursArrayId);

    // Добавляем Modals
    addModal(toursArrayId);

    // Запускаем отображение Modals
    showModal('#gallery', '#sliderClose', 'show-modal', 'no-scroll', '.modal__gallery', '.modal');

    window.addEventListener ("resize", function() {
        showModal('#gallery', '#sliderClose', 'show-modal', 'no-scroll', '.modal__gallery', '.modal');
    });
}

function addMap (toursArrayId) {
    const mapContainer = document.querySelector('#map');

    const map = toursArrayId.map;
    const lengthMap = map.length;

    for (let i = 0; i < lengthMap - 1; i++) {
        const mapHTML = `<p class="item__text">${map[i]}</p><svg class="item__arrow"><use xlink:href="#right-arrow"></use></svg>`;
        mapContainer.insertAdjacentHTML('beforeend', mapHTML);
    };

    const mapHTML = `<p class="item__text">${map[lengthMap - 1]}</p>`;
    mapContainer.insertAdjacentHTML('beforeend', mapHTML);
};

function addDataAll (toursArrayId) {
    const data = toursArrayId.data;

    addData(data, hiddenDate);
    addData(data, hiddenDate1);
};

function addExpectation (toursArrayId) {

    if (typeof toursArrayId['description'] !== "undefined") {
        toursArrayId.description.forEach(function (item) {
            const descriptionHTML = `<div class="item__text-text">
                                        ${item}
                                    </div>`;
    
            expectation.insertAdjacentHTML('beforeend', descriptionHTML);
        });
    }

    for (key in toursArrayId.subtitle) {

        const keyHTML = `<div class="item__text-subtitle">
                            ${key}
                        </div>
                        <div class="item__text-text">
                            ${toursArrayId.subtitle[key]}
                        </div>`;

        expectation.insertAdjacentHTML('beforeend', keyHTML);
    };

    if (typeof toursArrayId['expectation'] !== "undefined") {
        const expectationTextHTML = `<div class="item__text-text">
                                        ${toursArrayId.expectation}
                                    </div>` ;

        expectation.insertAdjacentHTML('beforeend', expectationTextHTML);

    } else if (typeof toursArrayId['expectationMore'] !== "undefined") {

        const expectationTextHTML = `<div class="item__text-subtitle">
                                        ${toursArrayId.expectationMore[0]}
                                    </div>
                                    <div class="item__text-text">
                                        <p>${toursArrayId.expectationMore[1]} <b class="bold">${toursArrayId.expectationMore[2]}</b> ${toursArrayId.expectationMore[3]} <b class="bold">${toursArrayId.expectationMore[4]}</b> ${toursArrayId.expectationMore[5]} <b class="bold">${toursArrayId.expectationMore[6]}</b>${toursArrayId.expectationMore[7]}</p>
                                    </div>` ;

        expectation.insertAdjacentHTML('beforeend', expectationTextHTML);
    };

    if (typeof toursArrayId['expectationMore1'] !== "undefined") {

        const expectationTextHTML = `<div class="item__text-subtitle">
                                        ${toursArrayId.expectationMore1[0]}
                                    </div>
                                    <div class="item__text-text">
                                        <p>${toursArrayId.expectationMore1[1]} <b class="bold">${toursArrayId.expectationMore1[2]}</b> ${toursArrayId.expectationMore1[3]} <b class="bold">${toursArrayId.expectationMore1[4]}</b> ${toursArrayId.expectationMore1[5]} <b class="bold">${toursArrayId.expectationMore1[6]}</b>${toursArrayId.expectationMore1[7]}</p>
                                    </div>
                                    <div class="item__text-subtitle">
                                        ${toursArrayId.expectationMore1[8]}
                                    </div>
                                    <div class="item__text-text">
                                        <p>${toursArrayId.expectationMore1[9]}</p>
                                    </div>` ;

        expectation.insertAdjacentHTML('beforeend', expectationTextHTML);
    };

    if (typeof toursArrayId['blockName'] !== "undefined") {

        const expectationTextHTML = `<div class="excursion__item-title  excursion__item-title--long">
                                        ${toursArrayId.blockName}
                                    </div>
                                    <div class="excursion__item-text  excursion__item-text--justify" id="moreBlock">
                                    </div>`;

        questionItem[questionItem.length-1].insertAdjacentHTML('beforebegin', expectationTextHTML);
        
        
        toursArrayId.blockText.forEach(function(item) {
            const itemHTML = `<div class="item__text-text">
                                ${item}
                            </div>`;

            document.querySelector('#moreBlock').insertAdjacentHTML('beforeend', itemHTML);
        });
    };

    if (typeof toursArrayId['imgIcon'] !== "undefined") {
        const expectationTextHTML = `<div class="item__text-text  item__text-text--coffee">
                                        <svg class="cofee__image">
                                            <use xlink:href="#${toursArrayId.imgIcon}"></use>
                                        </svg>
                                        <div class="coffee__text">
                                            ${toursArrayId.descriptionIcon}
                                        </div>
                                    </div>` ;

        expectation.insertAdjacentHTML('beforeend', expectationTextHTML);

    }

    toursArrayId.textDetails.forEach(function (item) {
        const itemHTML = `<div class="item__text-text">
                            ${item}
                        </div>`;

        details.insertAdjacentHTML('beforeend', itemHTML);
    });
};

function addModal (toursArrayId) {
    const modalHTML = 
        `<div class="modal" id="modal-gallery_${toursArrayId.id}">
            <div class="modal__gallery">
                <button class="modal__close" type="button" id="sliderClose">
                    <svg class="img__close">
                        <use xlink:href="#modal_close"></use>
                    </svg>
                </button>

                <div class="modal__images">
                    <ul class="modal__slider-list" data-slider="slick">
                    
                        <li class="modal__slider-element">
                            <picture class="modal__img">
                                <source  media="(max-width: 540px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-1.webp, ../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-1.img">
                                <source  media="(min-width: 541px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-1.webp, ../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-1.img">
                                <img class="modal__photo" src="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-1.jpg" alt="">
                            </picture>
                        </li>
                        <li class="modal__slider-element">
                            <picture class="modal__img">
                                <source  media="(max-width: 540px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-2.webp, ../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-2.img">
                                <source  media="(min-width: 541px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-2.webp, ../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-2.img">
                                <img class="modal__photo" src="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-2.jpg" alt="">
                            </picture>
                        </li>
                        <li class="modal__slider-element">
                            <picture class="modal__img">
                                <source  media="(max-width: 540px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-3.webp, ../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-3.img">
                                <source  media="(min-width: 541px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-3.webp, ../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-3.img">
                                <img class="modal__photo" src="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-3.jpg" alt="">
                            </picture>
                        </li>
                        <li class="modal__slider-element">
                            <picture class="modal__img">
                                <source  media="(max-width: 540px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-4.webp, ../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-4.img">
                                <source  media="(min-width: 541px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-4.webp, ../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-4.img">
                                <img class="modal__photo" src="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-4.jpg" alt="">
                            </picture>
                        </li>
                        <li class="modal__slider-element">
                            <picture class="modal__img">
                                <source  media="(max-width: 540px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-5.webp, ../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-5.img">
                                <source  media="(min-width: 541px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-5.webp, ../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-5.img">
                                <img class="modal__photo" src="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-5.jpg" alt="">
                            </picture>
                        </li>
                        <li class="modal__slider-element">
                            <picture class="modal__img">
                                <source  media="(max-width: 540px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-6.webp, ../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-6.img">
                                <source  media="(min-width: 541px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-6.webp, ../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-6.img">
                                <img class="modal__photo" src="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-6.jpg" alt="">
                            </picture>
                        </li>
                        <li class="modal__slider-element">
                            <picture class="modal__img">
                                <source  media="(max-width: 540px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-7.webp, ../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-7.img">
                                <source  media="(min-width: 541px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-7.webp, ../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-7.img">
                                <img class="modal__photo" src="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-7.jpg" alt="">
                            </picture>
                        </li>
                        <li class="modal__slider-element">
                            <picture class="modal__img">
                                <source  media="(max-width: 540px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-8.webp, ../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-8.img">
                                <source  media="(min-width: 541px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-8.webp, ../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-8.img">
                                <img class="modal__photo" src="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-8.jpg" alt="">
                            </picture>
                        </li>
                        <li class="modal__slider-element">
                            <picture class="modal__img">
                                <source  media="(max-width: 540px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-9.webp, ../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-9.img">
                                <source  media="(min-width: 541px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-9.webp, ../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-9.img">
                                <img class="modal__photo" src="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-9.jpg" alt="">
                            </picture>
                        </li>
                        <li class="modal__slider-element">
                            <picture class="modal__img">
                                <source  media="(max-width: 540px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-10.webp, ../../img/post/post-${toursArrayId.picture}/gallery/mobile/mobile-${toursArrayId.picture}-10.img">
                                <source  media="(min-width: 541px)" class="modal__photo" srcset="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-10.webp, ../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-10.img">
                                <img class="modal__photo" src="../../img/post/post-${toursArrayId.picture}/gallery/${toursArrayId.picture}-10.jpg" alt="">
                            </picture>
                        </li>

                    </ul>
                    <div class="modal__images__buttons">
                    <!-- Кнопки для перехода к предыдущему и следующему слайду -->
                    <button class="modal__images__btn slickPrev" type="button">
                        <svg class="prev__button">
                            <use xlink:href="#arrow"></use>
                        </svg>
                    </button>
                    <button class="modal__images__btn slickNext" type="button">
                        <svg class="next__button">
                            <use xlink:href="#arrow"></use>
                        </svg>
                    </button>

                    </div>
                    <div class="modal__slider-dots"></div>
                </div>

            </div>
        </div>`;

    document.querySelector('main').insertAdjacentHTML('beforeend', modalHTML);
};

function addData (dataList, containerId) {
    dataList.forEach(function(item) {

        const dataHTML = `<span class="date__days  date__days--excursion">&mdash; ${item}</span>`;

        containerId.insertAdjacentHTML('beforeend', dataHTML);
    });
};