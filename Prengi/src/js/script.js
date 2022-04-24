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
  });