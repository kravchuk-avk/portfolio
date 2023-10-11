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






document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('contacts__form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('_required');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

});