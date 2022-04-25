$(document).ready(function(){
    $('.slick-carousel').slick({
        prevArrow: "<button class='slick-prev'><img src='icons/arrow-left.png' alt='arrow'></button>",
        nextArrow: "<button class='slick-next'><img src='icons/arrow-right.png' alt='arrow'></button>",
		responsive: [
			{
				breakpoint: 1140,
				settings: {
					arrows: false
				}
			}
		]
    });

    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slick-carousel').slick('slickGoTo', slideno - 1);
      });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__nav'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__nav_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('header__nav_active');
            });
        });
    });
  });

