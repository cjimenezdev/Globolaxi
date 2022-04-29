const icon_menu = document.querySelector('.icon-menu'),
    menu = document.querySelector('.nav');
icon_menu.addEventListener('click', function() {
    menu.classList.toggle('flex');
})