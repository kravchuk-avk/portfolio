$(function(){


$('.header__btn, .header__link').on('click', function (event) {
  $('.header__btn,.header__line,.header__list, .header__link').toggleClass('header__btn--active');

  $('body').toggleClass('body__lock');

});

$('.logo, .header__link, .header__icon').on('click', function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1000);
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let scrollPos= 100;
  let header__menu = document.querySelector('.header__menu');

if(document.body.scrollTop > scrollPos ||
  document.documentElement.scrollTop > scrollPos) {
  header__menu.classList.add('header__menu--active');
} else {
header__menu.classList.remove('header__menu--active');
}
}

  var mixer = mixitup('.portfolio__list');





});

// document.addEventListener('DOMContentLoaded', function() {
//   const portfolioList = document.querySelector('.portfolio__list');
//   const portfolioButton = document.querySelector('.portfolio__button');

//   portfolioButton.addEventListener('click', function() {
//     portfolioList.classList.toggle('expanded');
//     const loadText = portfolioButton.getAttribute('data-load-text');
//     const collapseText = portfolioButton.getAttribute('data-collapse-text');
    
//     if (portfolioList.classList.contains('expanded')) {
//       portfolioButton.textContent = collapseText;
//     } else {
//       portfolioButton.textContent = loadText;
//     }
//   });
// });






