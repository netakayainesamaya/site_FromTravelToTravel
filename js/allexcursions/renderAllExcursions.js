// Ассинхронная функция получения данных из файла products.json
async function getTours(link, title, padding) {
    // Получаем данные из products.json
    const responce = await fetch(link);

    // Парсим данные из JSON формата в JS
    const toursArray = await responce.json();

    // запускаем функцию сортировки по цене от большего к меньшему
    generalSort('#generalpricestop', toursArray, maxPriceSort, padding);

    // запускаем функцию сортировки по цене от меньшего к большему
    generalSort('#generalpricesbottom', toursArray, minPriceSort, padding);

    // запускаем функцию сортировки по продолжительности от большего к меньшему
    generalSort('#generalduringtop', toursArray, maxDuringSort, padding);

    // запускаем функцию сортировки по продолжительности от меньшего к большему
    generalSort('#generalduringbottom', toursArray, minDuringSort, padding);

    // Запускаем ф-ю рендера (отображения товаров)
    renderTours(toursArray, padding);

    if (title == 'Экскурсии и туры') {
        // запускаем функцию отображения Sidebar
        visibleSidebar();
    };

    // запускаем функцию отображения ближайших дат
    document.querySelectorAll('.etc').forEach(function (item) {
        item.addEventListener('click', function() {
            const parentElement = item.parentElement;
            const parent = parentElement.parentElement;
            const postCost = parent.querySelector('.post__cost');
            const element = parentElement.querySelector('.comming__date-container');
            const rollUp = parentElement.querySelector('.etc--roll__up');
            element.classList.add('show');
            postCost.classList.add('show');
            parentElement.classList.add('show');
            rollUp.classList.add('show');
            item.classList.remove('show');
        });
    });

    document.querySelectorAll('.etc--roll__up').forEach(function (item) {
        item.addEventListener('click', function() {
            const parentElement = item.parentElement;
            const parent = parentElement.parentElement;
            const postCost = parent.querySelector('.post__cost');
            const element = parentElement.querySelector('.comming__date-container');
            const rollUp = parentElement.querySelector('.etc');
            element.classList.remove('show');
            postCost.classList.remove('show');
            parentElement.classList.remove('show');
            rollUp.classList.add('show');
            item.classList.remove('show');
        });
    });

    // запускаем отображение Modals
    showModal('[data-modal]', '[data-close]', 'show-modal', 'no-scroll', '.modal__gallery', '.modal');
}

function renderTours(toursArray, padding) {
    toursArray.forEach(function (item) {
        let pruningText = item.text;
        // Обрезаем текст и добавляем ...
        if ( window.innerWidth >= 1200 ) {
            pruningText = textcut(item.text, item.limitText);
        } else if ( window.innerWidth >= 1060 ) {
            pruningText = textcut(item.text, item.limitNotebookText);
        } else if ( window.innerWidth >= 930 ) {
            pruningText = textcut(item.text, item.limitBigDesktopText);
        } else if ( window.innerWidth >= 850 ) {
            pruningText = textcut(item.text, item.limitDesktopText);
        } else if ( window.innerWidth >= 800 ) {
            pruningText = textcut(item.text, item.limitSmDesktopText);
        } else if ( window.innerWidth >= 700 ) {
            pruningText = textcut(item.text, item.limitBigTabletText);
        } else if ( window.innerWidth >= 670 ) {
            pruningText = textcut(item.text, item.limitTabletText);
        } else if ( window.innerWidth >= 540 ) {
            pruningText = textcut(item.text, item.limitSmTabletText);
        } else if ( window.innerWidth >= 490 ) {
            pruningText = textcut(item.text, item.limitMobileText);
        } else if ( window.innerWidth >= 320 ) {
            pruningText = textcut(item.text, item.limitSmMobileText);
        }

        const toursHTML =  `<div class="preview__container ${padding}"  data-days="${item.duringDays}">    
                                <div class="post__container" data-container>
                                    <div class="post__image">
                                        <div class="post__mask">
                                            <picture>
                                                <source class="post__img" srcset="./img/post/post-${item.picture}/${item.picture}-bg@1x.webp 1x, ./img/post/post-${item.picture}/${item.picture}-bg@2x.webp 2x" type="image/webp">
                                                <img class="post__img" src="./img/post/post-${item.picture}/${item.picture}-bg@1x.jpg" srcset="./img/post/post-${item.picture}/${item.picture}-bg@1x.jpg 1x, ./img/post/post-${item.picture}/${item.picture}-bg@2x.jpg 2x" alt="">
                                            </picture>
                                            <div class="post__set">
                                                <img class="set__img" src="./img/post__preview/post_set.svg" alt="">
                                                <svg class="set__arrows">
                                                    <use xlink:href="#set__arrows"></use>
                                                </svg>
                                                <div class="set__text">
                                                    <p>Идёт набор</p>
                                                    <p>в группу</p>
                                                </div>
                                            </div>
                                            <div class="post__type">
                                                <img class="type__img" src="./img/post__preview/post_type.svg" alt="">
                                                <div class="type__text">${item.format}</div>
                                            </div>
                                            <div class="post__social">
                                                <div class="social__gallery">
                                                    <a class="gallery" href="#" target="_blank" data-modal="#modal-gallery_${item.id}">
                                                        <img class="gallery__icon" src="./img/social_icons/social-gallery.svg" alt="">
                                                        <div class="gallery__text">Ещё фото...</div>
                                                    </a>
                                                </div>
                                                <div class="social">
                                                    <a class="social__item" href="#" target="_blank">
                                                        <svg class="social__icon">
                                                            <use xlink:href="#vk"></use>
                                                        </svg>
                                                    </a>
                                                    <a class="social__item" href="#" target="_blank">
                                                        <svg class="social__icon">
                                                            <use xlink:href="#instagram"></use>
                                                        </svg>
                                                    </a>
                                                    <a class="social__item" href="#" target="_blank">
                                                        <svg class="social__icon">
                                                            <use xlink:href="#facebook"></use>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post__content">
                                        <h1 class="post__title">${item.title}</h1>
                                        <h3 class="post__subtitle  post__subtitle--showhidden  post__subtitle--showhidden  post__subtitle--big-tablet1_1">${item.subtitle}</h3>
                                        <div class="post__date-hidden">
                                            <div class="post__date">
                                                <div class="post__days">
                                                    <svg class="post__days-image">
                                                        <use xlink:href="#${item.days}"></use>
                                                    </svg>
                                                    <div class="post__days-text">${item.dayText}</div>
                                                </div>
                                                <div class="post__days">
                                                    <svg class="post__days-image">
                                                        <use xlink:href="#${item.night}"></use>
                                                    </svg>
                                                    <div class="post__days-text">${item.nightText}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="post__text" id="post__text-maldives">${pruningText}</span>
                                        <div class="post__footer-block">
                                            <div class="post__cost">
                                                <div class="old__price">${item.oldPrice} руб</div>
                                                <div class="new__price">
                                                    <span>${item.newPrice}</span>
                                                    <span> руб</span>
                                                </div>
                                            </div>
                                        </div>
                                        <a class="post__btn" href="./tours/post-${item.picture}.html">
                                            <button class="btn btn--sm-tour" type="submit">Просмотр тура</button>
                                        </a>
                                    </div>
                                    <div class="post__footer">
                                        <div class="post__date">
                                            <div class="post__days">
                                                <svg class="post__days-image">
                                                    <use xlink:href="#${item.days}"></use>
                                                </svg>
                                                <div class="post__days-text">${item.dayText}</div>
                                            </div>
                                            <div class="post__days">
                                                <svg class="post__days-image">
                                                    <use xlink:href="#${item.night}"></use>
                                                </svg>
                                                <div class="post__days-text">${item.nightText}</div>
                                            </div>
                                        </div>
                                        <div class="post__cost">
                                            <div class="old__price">от ${item.oldPrice} руб</div>
                                            <div class="new__price">
                                                <span class="price">${item.newPrice}</span>
                                                <span> руб</span>
                                            </div>
                                        </div>
                                        <div class="comming__date">
                                            <div class="comming__date-title">Ближайшие даты:</div>
                                            <div class="comming__date-container">
                                                <span class="comming__date-item">28 июня - 6 июля</span>
                                                <span class="comming__date-item">5 июня - 9 июля</span>
                                                <span class="comming__date-item">12 июня - 16 июля</span>
                                                <span class="comming__date-item">19 июня - 23 июля</span>
                                            </div>
                                            <button class="etc  show">
                                                <span class="etc__text">Ещё</span>
                                                <div class="etc__icon-container">
                                                    <svg class="etc__icon">
                                                        <use xlink:href="#etc"></use>
                                                    </svg>
                                                </div>
                                            </button>
                                            <button class="etc  etc--roll__up">
                                                <span class="etc__text">Свернуть</span>
                                                <div class="etc__icon-container">
                                                    <svg class="etc__icon">
                                                        <use xlink:href="#etc"></use>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <a class="post__btn" href="./tours/post-${item.picture}.html">
                                        <button class="btn btn--tour" type="submit">Просмотреть тур</button>
                                    </a>
                                </div>
                            </div>

                            <div class="modal" id="modal-gallery_${item.id}">
                                <div class="modal__gallery">
                                    <button class="modal__close" type="button" data-close>
                                        <svg class="img__close">
                                            <use xlink:href="#modal_close"></use>
                                        </svg>
                                    </button>
                    
                                    <div class="modal__images">
                                        <ul class="modal__slider-list" data-slider="slick">
                                        
                                            <li class="modal__slider-element">
                                                <picture class="modal__img">
                                                    <source  media="(max-width: 540px)" class="modal__photo" srcset="./img/post/post-${item.picture}/gallery/mobile/mobile-${item.picture}-1.webp, ./img/post/post-${item.picture}/gallery/mobile/mobile-${item.picture}-1.img">
                                                    <source  media="(min-width: 541px)" class="modal__photo" srcset="./img/post/post-${item.picture}/gallery/${item.picture}-1.webp, ./img/post/post-${item.picture}/gallery/${item.picture}-1.img">
                                                    <img class="modal__photo" src="./img/post/post-${item.picture}/gallery/${item.picture}-1.jpg" alt="">
                                                </picture>
                                            </li>
                                            <li class="modal__slider-element">
                                                <picture class="modal__img">
                                                    <source  media="(max-width: 540px)" class="modal__photo" srcset="./img/post/post-${item.picture}/gallery/mobile/mobile-${item.picture}-2.webp, ./img/post/post-${item.picture}/gallery/mobile/mobile-${item.picture}-2.img">
                                                    <source  media="(min-width: 541px)" class="modal__photo" srcset="./img/post/post-${item.picture}/gallery/${item.picture}-2.webp, ./img/post/post-${item.picture}/gallery/${item.picture}-2.img">
                                                    <img class="modal__photo" src="./img/post/post-${item.picture}/gallery/${item.picture}-2.jpg" alt="">
                                                </picture>
                                            </li>
                                            <li class="modal__slider-element">
                                                <picture class="modal__img">
                                                    <source  media="(max-width: 540px)" class="modal__photo" srcset="./img/post/post-${item.picture}/gallery/mobile/mobile-${item.picture}-3.webp, ./img/post/post-${item.picture}/gallery/mobile/mobile-${item.picture}-3.img">
                                                    <source  media="(min-width: 541px)" class="modal__photo" srcset="./img/post/post-${item.picture}/gallery/${item.picture}-3.webp, ./img/post/post-${item.picture}/gallery/${item.picture}-3.img">
                                                    <img class="modal__photo" src="./img/post/post-${item.picture}/gallery/${item.picture}-3.jpg" alt="">
                                                </picture>
                                            </li>
                                            <li class="modal__slider-element">
                                                <picture class="modal__img">
                                                    <source  media="(max-width: 540px)" class="modal__photo" srcset="./img/post/post-${item.picture}/gallery/mobile/mobile-${item.picture}-4.webp, ./img/post/post-${item.picture}/gallery/mobile/mobile-${item.picture}-4.img">
                                                    <source  media="(min-width: 541px)" class="modal__photo" srcset="./img/post/post-${item.picture}/gallery/${item.picture}-4.webp, ./img/post/post-${item.picture}/gallery/${item.picture}-4.img">
                                                    <img class="modal__photo" src="./img/post/post-${item.picture}/gallery/${item.picture}-4.jpg" alt="">
                                                </picture>
                                            </li>
                                            <li class="modal__slider-element">
                                                <picture class="modal__img">
                                                    <source  media="(max-width: 540px)" class="modal__photo" srcset="./img/post/post-${item.picture}/gallery/mobile/mobile-${item.picture}-5.webp, ./img/post/post-${item.picture}/gallery/mobile/mobile-${item.picture}-5.img">
                                                    <source  media="(min-width: 541px)" class="modal__photo" srcset="./img/post/post-${item.picture}/gallery/${item.picture}-5.webp, ./img/post/post-${item.picture}/gallery/${item.picture}-5.img">
                                                    <img class="modal__photo" src="./img/post/post-${item.picture}/gallery/${item.picture}-5.jpg" alt="">
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

        window.addEventListener("resize", function() {
            let cutText = item.text;

            document.querySelectorAll('[data-container]').forEach(function(element) {
                let cutText = item.text;

                if (element.querySelector('.post__title').innerText == item.title) {

                    if ( window.innerWidth >= 1200 ) {
                        cutText = textcut(item.text, item.limitText);
                        element.querySelector('.post__text').innerText = cutText;
                    } else if ( window.innerWidth >= 1060 ) {
                        cutText = textcut(item.text, item.limitNotebookText);
                        element.querySelector('.post__text').innerText = cutText;
                    } else if ( window.innerWidth >= 930 ) {
                        cutText = textcut(item.text, item.limitBigDesktopText);
                        element.querySelector('.post__text').innerText = cutText;
                    } else if ( window.innerWidth >= 850 ) {
                        cutText = textcut(item.text, item.limitDesktopText);
                        element.querySelector('.post__text').innerText = cutText;
                    } else if ( window.innerWidth >= 800 ) {
                        cutText = textcut(item.text, item.limitSmDesktopText);
                        element.querySelector('.post__text').innerText = cutText;
                    } else if ( window.innerWidth >= 700 ) {
                        cutText = textcut(item.text, item.limitBigTabletText);
                        element.querySelector('.post__text').innerText = cutText;
                    } else if ( window.innerWidth >= 670 ) {
                        cutText = textcut(item.text, item.limitTabletText);
                        element.querySelector('.post__text').innerText = cutText;
                    } else if ( window.innerWidth >= 540 ) {
                        cutText = textcut(item.text, item.limitSmTabletText);
                        element.querySelector('.post__text').innerText = cutText;
                    } else if ( window.innerWidth >= 490 ) {
                        cutText = textcut(item.text, item.limitMobileText);
                        element.querySelector('.post__text').innerText = cutText;
                    } else if ( window.innerWidth >= 320 ) {
                        cutText = textcut(item.text, item.limitSmMobileText);
                        element.querySelector('.post__text').innerText = cutText;
                    } 
                }

            })

        });

        toursContainer.insertAdjacentHTML('beforeend', toursHTML);
    });
};

