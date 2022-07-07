//slider
$(document).ready(function(){
    
    $('.media__slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});


//burger
// const iconMenu = document.querySelector('.burger');
// const menuBody = document.querySelector('.menu__body');
// const animBurger = document.querySelector('.burger span');
// if (iconMenu) {
//     iconMenu.addEventListener("click", function (e) {
//         iconMenu.classList.toggle('active');
//         menuBody.classList.toggle('active');
//         animBurger.classList.toggle('active');
//     });
// }
const menuBtn = document.querySelector('.burger__btn');
const menu = document.querySelector('.header__menu');
const link = document.querySelector('.menu__link');

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  
  
})
link.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  
  
})

//scroll
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const  gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
        // if (iconMenu.classList.contains('active')) {
        //     iconMenu.classList.remove('active');
        //     menuBody.classList.remove('active');
        //     animBurger.classList.remove('active');
        // }
        
        window.scrollTo({
        top: gotoBlockValue,
        behavior:"smooth"
        });
        e.preventDefault();
        }
    }
}

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');


const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');
 
window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }
 
    lastScroll = scrollPosition();
})