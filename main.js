$(document).ready(function () {
    let headerBurgerBtn = document.querySelector('.header__burger');
    let headerBurgerIcon = document.querySelector('.header__burger i');
    let headerSearchIcon = document.querySelector('.header__search i');
    let dropdownMenu = document.querySelector('.header__dropdown');

    let header = document.querySelector('.header');
    let headerMenu = document.querySelector('.menu');
    let innerMenu = document.querySelector('.menu-inner');
    let innerMenuLinks = document.querySelectorAll('.dropdown-menu__link');

    let hotlineBlock = document.querySelector('.hotline');
    let headerBtnBlock = document.querySelector('.header__btn');

    let fixedMenu = document.querySelector('.header__middle');
    let promoBlock = document.querySelector('.promo-and-partners');

    let headerLogoBlock = document.querySelector('.header__logo');
    let headerLogo = document.querySelector('.logo');
    let headerLogoAlt = document.querySelector('.logo-alt');
    let headerLogoMobile = document.querySelector('.logo-mobile');

    const toggleMenu = e => {

        e.preventDefault();
        if (headerBurgerIcon.classList.contains('fa-bars')) {
            headerBurgerIcon.classList.remove('fa-bars');
            headerBurgerIcon.classList.add('fa-times');
        } else {
            headerBurgerIcon.classList.add('fa-bars');
            headerBurgerIcon.classList.remove('fa-times');
        }
        if (!dropdownMenu.classList.contains('active')) {
            $('div[data-btn-target] a').appendTo('[data-btn-spot]');
        } else {
            $('div[data-btn-spot] a').appendTo('[data-btn-target]');
        }
        dropdownMenu.classList.toggle('active');
        header.classList.toggle('active');

        headerBurgerIcon.classList.toggle('active');

        headerMenu.classList.toggle('active');
        headerSearchIcon.classList.toggle('active');
        $('[data-header-btn]').toggleClass('active');
        if (window.screen.width < 568) {
            $('[data-header-btn]').appendTo('[data-header-btn-spot]');
            $('[data-target-lang]').appendTo('[data-lang-spot]');
        }

    }
    const fixMenu = () => {
        if (window.pageYOffset > 10 && !dropdownMenu.classList.contains('active')) {
            fixedMenu.classList.add('fixed');
            promoBlock.classList.add('fixed');

            dropdownMenu.classList.add('fixed')
            if (window.screen.width > 768) {
                headerLogo.classList.add('active');
                headerLogoAlt.classList.add('active');
            }
            headerBtnBlock.classList.add('active');

        } else {

            fixedMenu.classList.remove('fixed');
            promoBlock.classList.remove('fixed');
            headerLogo.classList.remove('active');
            headerLogoAlt.classList.remove('active');
            dropdownMenu.classList.remove('fixed');
            headerBtnBlock.classList.remove('active');
        }
    }

    const openInnerMenu = e => {
        e.preventDefault();
        let target = e.target;

        target.nextElementSibling.classList.toggle('active')
        if (target.children[0].classList.contains('fa-chevron-right')) {
            target.children[0].classList.remove('fa-chevron-right')
            target.children[0].classList.add('fa-chevron-down')
        } else {
            target.children[0].classList.remove('fa-chevron-down')
            target.children[0].classList.add('fa-chevron-right')
        }
    }

    innerMenuLinks.forEach(item => item.addEventListener('click', openInnerMenu))
    headerBurgerBtn.addEventListener('click', toggleMenu);
    window.addEventListener('scroll', fixMenu);
    $('.promo-and-partners__slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-next.png" alt=""></button>',
    });
});