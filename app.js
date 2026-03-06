const menu = document.querySelector('#mobile-menu');
const menuLinks =document.querySelector('.navbar__menu');
const overlay = document.querySelector(".overlay");


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    overlay.classList.toggle("overlay-is-active");


});

overlay.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    overlay.classList.toggle("overlay-is-active");

});


const btns = document.querySelectorAll('.kysBtn');
const vastaukset = document.querySelectorAll('.kysymysCont');
const arrows = document.querySelectorAll('.arrow');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        vastaukset[index].classList.toggle('open');
        arrows[index].classList.toggle('rotate');
    })
});

