let menuFix = document.querySelector('.header-fix');
let menuMobile = document.querySelector('.header-mobile');

let menuBtn = document.querySelectorAll('.header-center__menu-icon');
let menuIcon = document.querySelector('.header-mobile__menu-icon');

let menuDownIcon = document.querySelectorAll('.header-mobile__item i');

window.pageYOffset > 80 ? menuFix.classList.add('active') : menuFix.classList.remove('active');
const fixMenu = () => {
window.pageYOffset > 80 ? menuFix.classList.add('active') : menuFix.classList.remove('active');

}
const openMenu = () => {
    menuMobile.classList.toggle('active');
    let src = menuIcon.getAttribute('src');
    let newSrc;
    
    menuMobile.classList.contains('active') ? newSrc = src.replace('menu-icon.png', 'menu-icon-close.png') : newSrc = src.replace('menu-icon-close.png', 'menu-icon.png');
    
    menuIcon.setAttribute('src', newSrc);  
        
}
const openMenuDown = (e) => {
let target = e.target.nextElementSibling;
target.classList.toggle('active')

}
document.addEventListener('scroll', fixMenu)
menuBtn.forEach(item => item.addEventListener('click', openMenu))
menuDownIcon.forEach(item => item.addEventListener('click', openMenuDown))