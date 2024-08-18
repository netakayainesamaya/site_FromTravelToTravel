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

    if ( window.innerWidth >= 540 ) {
        // прекращаем функцию вызова nav-toggle 
        closeNavToggle();

    } else if ( window.innerWidth < 540 ) {
        // показываем меню nav-toggle
        openNavToggle();
    };
});


/* ===== Button Up =====================================
======================================================*/
if (document.getElementById('upbtn')) {
    document.getElementById('upbtn').addEventListener('click', function() {
        up();
    });
};


/* ===== Zoom image ====================================
======================================================*/
if (document.getElementById('map')) {
    document.getElementById('map').addEventListener('click', function() {
        console.log('ggg');
        document.getElementById('map').classList.toggle('zoom');
    });
};


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