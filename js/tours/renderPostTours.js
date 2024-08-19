// Ассинхронная функция получения данных из файла post-tours.json
async function getTours(id, link) {
    // Получаем данные из products.json
    const responce = await fetch('../js/tours/post-tours.json');
    const responceDays = await fetch(link);

    // Парсим данные из JSON формата в JS
    const toursArray = await responce.json();
    const daysArray = await responceDays.json();

    // Выбираем нужный нам тур
    const toursArrayId = toursArray[id];

    // Добавляем текст title, description, descriptionShort, cost, costAlone, days, night
    addInnerText(toursArrayId);

    // Добавляем катру маршрута
    addMap(toursArrayId);

    // Добавляем даты
    addDataAll(toursArrayId);

    // Добавляем контейнеры с днями
    addContainerDays(daysArray);

    document.querySelectorAll('.tours__images-slider').forEach(function(item) {
        new ChiefSlider(item, '.tours__images-wrapper', '.tours__images-items', '.day__images', '.slider__control[data-slide="prev"]', '.slider__control[data-slide="next"]', {
            loop: true,
            autoplay: false
        });
    });

    // Добавляем footerForm
    addFooter(toursArrayId);
};

function addMap (toursArrayId) {
    const mapContainer = document.querySelector('#map');

    const map = toursArrayId.map;
    const lengthMap = map.length;

    widthMapContainer(mapContainer, lengthMap, map);

    window.addEventListener ("resize", function() {

        widthMapContainer(mapContainer, lengthMap, map);
    });
};

function addDataAll (toursArrayId) {
    const data = toursArrayId.data;
    const dataShort = toursArrayId.dataShort;

    addData(data, hiddenDate);
    addData(dataShort, hiddenDate1);
};

function addContainerDays (daysArray) {
    daysArray.forEach(function(item) {

        const containerDaysHTML = 
            `<div class="day__container">
                <div class="day__content">
                    <div class="day__flag">
                        <svg class="day__flag-img">
                            <use xlink:href="#check"></use>
                        </svg>
                        <div class="day__flag-name">День ${item.id}</div>
                    </div>
                    <div class="day__item">
                        <div class="day__item__img">
                            <svg class="day__item__image">
                                <use xlink:href="#location__icon"></use>
                            </svg>
                        </div>
                        <div class="day__item__content"  id="day${item.id}">

                        </div>
                    </div>
                    <div class="day__item  day__item--dinner">
                        <div class="day__item__img  day__item__img--dinner">
                            <svg class="day__item__image">
                                <use xlink:href="#dinner"></use>
                            </svg>
                        </div>
                        <div class="day__item__content  day__item__content--dinner">
                            <p class="dinner__title">Включено:</p><p class="dinner__text">${item.dinner}</p>
                        </div>
                    </div>
                    <div class="day__content-description" id="description${item.id}">${item.descriptionDay}</div>
                </div>
                <div class="tours__images">

                    <div class="tours__images-slider">
                        <div class="tours__arrows">
                            <button class="slider__control  slider__control--tours" data-slide="prev"></button>
                        </div>

                        <div class="tours__images-wrapper">

                            <div class="tours__images-items">
                                <picture class="day__images">
                                    <source class="day_img" media="(max-width: 699px)" srcset="../img/post/post-${item.picture}/day${item.id}/sm-${item.picture}-1.webp, ../img/post/post-${item.picture}/day${item.id}/sm-${item.picture}-1.jpg">
                                    <source class="day_img" media="(min-width: 700px)" srcset="../img/post/post-${item.picture}/day${item.id}/${item.picture}-1.webp, ../img/post/post-${item.picture}/day${item.id}/${item.picture}-1.jpg">
                                    <img class="day_img" src="../img/post/post-${item.picture}/day${item.id}/${item.picture}-1.jpg" alt="">
                                </picture>
                                <picture class="day__images">
                                    <source class="day_img" media="(max-width: 699px)" srcset="../img/post/post-${item.picture}/day${item.id}/sm-${item.picture}-2.webp, ../img/post/post-${item.picture}/day${item.id}/sm-${item.picture}-2.jpg">
                                    <source class="day_img" media="(min-width: 700px)" srcset="../img/post/post-${item.picture}/day${item.id}/${item.picture}-2.webp, ../img/post/post-${item.picture}/day${item.id}/${item.picture}-2.jpg">
                                    <img class="day_img" src="../img/post/post-${item.picture}/day${item.id}/${item.picture}-2.jpg" alt="">
                                </picture>
                                <picture class="day__images">
                                    <source class="day_img" media="(max-width: 699px)" srcset="../img/post/post-${item.picture}/day${item.id}/sm-${item.picture}-3.webp, ../img/post/post-${item.picture}/day${item.id}/sm-${item.picture}-3.jpg">
                                    <source class="day_img" media="(min-width: 700px)" srcset="../img/post/post-${item.picture}/day${item.id}/${item.picture}-3.webp, ../img/post/post-${item.picture}/day${item.id}/${item.picture}-3.jpg">
                                    <img class="day_img" src="../img/post/post-${item.picture}/day${item.id}/${item.picture}-3.jpg" alt="">
                                </picture>
                                <picture class="day__images">
                                    <source class="day_img" media="(max-width: 699px)" srcset="../img/post/post-${item.picture}/day${item.id}/sm-${item.picture}-4.webp, ../img/post/post-${item.picture}/day${item.id}/sm-${item.picture}-4.jpg">
                                    <source class="day_img" media="(min-width: 700px)" srcset="../img/post/post-${item.picture}/day${item.id}/${item.picture}-4.webp, ../img/post/post-${item.picture}/day${item.id}/${item.picture}-4.jpg">
                                    <img class="day_img" src="../img/post/post-${item.picture}/day${item.id}/${item.picture}-4.jpg" alt="">
                                </picture>
                                <picture class="day__images">
                                    <source class="day_img" media="(max-width: 699px)" srcset="../img/post/post-${item.picture}/day${item.id}/sm-${item.picture}-5.webp, ../img/post/post-${item.picture}/day${item.id}/sm-${item.picture}-5.jpg">
                                    <source class="day_img" media="(min-width: 700px)" srcset="../img/post/post-${item.picture}/day${item.id}/${item.picture}-5.webp, ../img/post/post-${item.picture}/day${item.id}/${item.picture}-5.jpg">
                                    <img class="day_img" src="../img/post/post-${item.picture}/day${item.id}/${item.picture}-5.jpg" alt="">
                                </picture>
                            </div>

                        </div>

                        <div class="tours__arrows-next">
                            <button class="slider__control  slider__control--tours" data-slide="next"></button>
                        </div>
                        <ol class="slider__indicators">
                            <li data-slide-to="0"></li>
                            <li data-slide-to="1"></li>
                            <li data-slide-to="2"></li>
                            <li data-slide-to="3"></li>
                            <li data-slide-to="4"></li>
                        </ol>
                    </div>

                </div><!-- /.tours__images -->
            </div><!-- /.day__container -->`;

        mainContainer.insertAdjacentHTML('beforeend', containerDaysHTML);


        // Добавляем места маршрута        
        const id = `#day${item.id}`;
        const map = item.map;
        const lengthMap = map.length;

        for (let i = 0; i < lengthMap - 1; i++) {
            const mapHTML = `<p class="item__text  item__text--location">${map[i]}</p><svg class="item__arrow"><use xlink:href="#right-arrow"></use></svg>`;
            document.querySelector(id).insertAdjacentHTML('beforeend', mapHTML);
        };
    
        const mapHTML = `<p class="item__text  item__text--location">${map[lengthMap - 1]}</p>`;
        document.querySelector(id).insertAdjacentHTML('beforeend', mapHTML);


        // Добавляем класс description
        const mapHeight = document.querySelector(`#day${item.id}`);
        const parentMap = mapHeight.closest('.day__item');
        const parentMapImg = parentMap.querySelector('.day__item__img');

        if (mapHeight.offsetHeight > 55) {
            document.querySelector(`#description${item.id}`).classList.add('day__content-description--long');
        } else if (mapHeight.offsetHeight < 35) {
            parentMap.classList.add('height');
            parentMapImg.classList.add('height');

            document.querySelector(`#description${item.id}`).classList.add('day__content-description--short');
        } else {
            parentMap.classList.remove('height');
            parentMapImg.classList.remove('height');

            document.querySelector(`#description${item.id}`).classList.remove('day__content-description--long');
            document.querySelector(`#description${item.id}`).classList.remove('day__content-description--short');
        }

        window.addEventListener ("resize", function() {

            const mapHeight = document.querySelector(`#day${item.id}`);

            if (mapHeight.offsetHeight > 55) {
                document.querySelector(`#description${item.id}`).classList.add('day__content-description--long');
            } else if (mapHeight.offsetHeight < 35) {
                parentMap.classList.add('height');
                parentMapImg.classList.add('height');

                document.querySelector(`#description${item.id}`).classList.add('day__content-description--short');
            } else {
                parentMap.classList.remove('height');
                parentMapImg.classList.remove('height');

                document.querySelector(`#description${item.id}`).classList.remove('day__content-description--long');
                document.querySelector(`#description${item.id}`).classList.remove('day__content-description--short');
            }
        });
    });
};

function addFooter (toursArrayId) {

    const footerHTML = 
        `<!-- ========== Form ========== -->
        <div class="cabinet">
            <div class="cabinet__header">
                <div class="cabinet__form__header">
                    <svg class="set__arrows  set__arrows--header">
                        <use xlink:href="#set__arrows"></use>
                    </svg>
                    <div class="form__header-text">Набор в группу</div>
                </div>
            </div>
            <div class="form__header__content">
                <div class="form__cost"  data-cost>${toursArrayId.cost}</div>
                <div class="form__date">
                    <div class="form__date-item">
                        <svg class="form__date-img"  data-iconfirst>
                            <use xlink:href="#day-icon"></use>
                        </svg>
                        <div class="form__date-text">${toursArrayId.days}</div>
                    </div>
                    <div class="form__date-item">
                        <svg class="form__date-img"  data-iconsecond>
                            <use xlink:href="#night-icon"></use>
                        </svg>
                        <div class="form__date-text">${toursArrayId.night}</div>
                    </div>
                </div>
            </div>
            <div class="cabinet__form">
                <div class="form__group">
                    <input class="form__control" type="text" placeholder="Ваше имя">
                </div>
                <div class="form__group">
                    <input class="form__control" type="text" placeholder="Номер телефона">
                </div>
                <div class="form__group">
                    <input class="form__control" type="text" placeholder="E-mail">
                </div>
                <div class="form__group">
                    <textarea class="form__control form__control--textarea" type="text" placeholder="Кол-во человек и другие комментарии"></textarea>
                </div>
                <div class="send__button">
                    <button class="btn  btn--form" type="button">Отправить</button>
                </div>
            </div>
        </div>`;

    footerForm.insertAdjacentHTML('beforeend', footerHTML);
};

function addElements (container, lengthMap, length, map) {
    for (let i = 0; i < lengthMap - length; i++) {
        const mapHTML = `<p class="item__text">${map[i]}</p><svg class="item__arrow"><use xlink:href="#right-arrow"></use></svg>`;
        container.insertAdjacentHTML('beforeend', mapHTML);
    };

    const mapHTML = `<p class="item__text">${map[lengthMap - 1]}</p>`;
    container.insertAdjacentHTML('beforeend', mapHTML);
};

function removeElements (container, classElem) {
    container.querySelectorAll(classElem).forEach(function(item) {
        item.remove();
    });
};

function widthMapContainer (mapContainer, lengthMap, map) {
    
    if ( window.innerWidth >= 850 ) {
        removeElements(mapContainer, '.item__text');
        removeElements(mapContainer, '.item__arrow');

        addElements(mapContainer, lengthMap, 1, map);

    } else {
        removeElements(mapContainer, '.item__text');
        removeElements(mapContainer, '.item__arrow');

        addElements(mapContainer, lengthMap, 2, map);
    };
};

function addData (dataList, containerId) {
    dataList.forEach(function(item) {

        const dataHTML = `<span class="date__days">&mdash; ${item}</span>`;

        containerId.insertAdjacentHTML('beforeend', dataHTML);
    });
};