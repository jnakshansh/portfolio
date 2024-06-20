// var preloader = document.getElementById('loader');
// function myfunction(){
//     preloader.style.display='none';
// }



$(window).load(function() {
    $('#loader').delay(1000).fadeOut('slow');
});

$(document).ready(function() {
    $('#my_projects').click(function() {
        $('html, body').animate({
            scrollTop: $("#Portfolio").offset().top
        }, 1000);
    });

    $('#hire_me').click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $('#icon-scroll').click(function() {
        $('html, body').animate({
            scrollTop: $("#header_wrapper").offset().top
        }, 1000);
    });
    $('#header_wrapper').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false

    });
	 
	$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show'); 

	$( window ).scroll(function() {   
	// if($( window ).scrollTop() > 10){   scroll down abit and get the action   
	$(".progress-bar").each(function(){
	each_bar_width = $(this).attr('aria-valuenow');
	$(this).width(each_bar_width + '%');
    });
    
	   
	//  }  
	});

    if ($('#main-nav ul li:first-child').hasClass('active')) {
        $('#main-nav').css('background', 'none');
    }
    $('#mainNav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function() {
        },
        end: function() {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }

        },
        scrollChange: function($currentListItem) {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }
        }
    });

    var container = $('#portfolio_wrapper');


    container.isotope({
        animationEngine: 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows'
    });

    $('#filters a').click(function() {
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        container.isotope({
            filter: selector
        });
        setProjects();
        return false;
    });

    function splitColumns() {
        var winWidth = $(window).width(),
            columnNumb = 1;


        if (winWidth > 1024) {
            columnNumb = 3;
        } else if (winWidth > 900) {
            columnNumb = 2;
        } else if (winWidth > 479) {
            columnNumb = 2;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }

        return columnNumb;
    }
	
    function setColumns() {
        var winWidth = $(window).width(),
            columnNumb = splitColumns(),
            postWidth = Math.floor(winWidth / columnNumb);

        container.find('.portfolio-item').each(function() {
            $(this).css({
                width: postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }

    container.imagesLoaded(function() {
        setColumns();
    });


    $(window).bind('resize', function() {
        setProjects();
    });

   $(".fancybox").fancybox();
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();
document.getElementById('').onclick = function() {
    var section = document.createElement('section');
    section.className = 'wow fadeInDown';
    section.className = 'wow shake';
    section.className = 'wow zoomIn';
    section.className = 'wow lightSpeedIn';
    this.parentNode.insertBefore(section, this);
};


