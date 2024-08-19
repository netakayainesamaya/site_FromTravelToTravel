/* ========== Variables ===================
=========================================*/
const footerForm = document.querySelector('.items__form--footer');
const mainContainer = document.querySelector('#tours__main-container');


/* ===== Render Tours ==================================
======================================================*/
if (title == 'Крымские Мальдивы') {
    getTours(0, 'post-tours/post-fiolent.json');
} else if (title == 'Новый Свет') {
    getTours(1, 'post-tours/post-new_world.json');
} else if (title == 'Коктебель') {
    getTours(2, 'post-tours/post-coctebel.json');
} else if (title == 'Форос') {
    getTours(3, 'post-tours/post-foros.json');
} else if (title == 'Z-City') {
    getTours(4, 'post-tours/post-popovka.json');
} else if (title == 'Крымская Венеция') {
    getTours(5, 'post-tours/post-balaclava.json');
} else if (title == 'Тарханкут') {
    getTours(6, 'post-tours/post-tarhankut.json');
} else if (title == 'Семь Чудес Киммерии') {
    getTours(7, 'post-tours/post-feodosia.json');
} else if (title == 'Горы Море Облака') {
    getTours(8, 'post-tours/post-hike.json');
};


/* ===== Button Etc ====================================
======================================================*/
buttonEtcClick (buttonEtc, hiddenDate, buttonClose, itemsContainer, sendButton);


/* ===== Footer Buttons ================================
======================================================*/
// ========== 1. Click Buttons ===========
clickFooterSendButton (call, callUs, "Обратный звонок", "Звонок");

dataSend.forEach(function(item) {
    clickFooterSendButton (item, rightUs, "Написать нам", "Написать");
});

// ========== 2. Dropdown Form ===========
dropdownSendForm ('#formDropdownCall', '#dropdownButtonCall', 'Выбрать удобное время:', 'Удобное время:');
dropdownSendForm ('#formDropdownSend', '#dropdownButtonSend', 'Выбрать удобную форму ответа:', 'Форма ответа:');