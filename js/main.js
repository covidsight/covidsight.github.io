;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#colorlib-offcanvas, .js-colorlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="colorlib-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#colorlib-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#colorlib-offcanvas').append(clone2);

		$('#colorlib-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#colorlib-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
		});
	};

	var burgerMenu = function() {

		$('body').on('click', '.js-colorlib-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};
	

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	var stickyNavBar = function() {

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top2').addClass('active');
			} else {
				$('.js-top2').removeClass('active');
			}

		});		

	}

	// Loading page
	var loaderPage = function() {
		$(".colorlib-loader").fadeOut("slow");
	};


	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};


	var counterWayPoint = function() {
		if ($('#colorlib-counter').length > 0 ) {
			$('#colorlib-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Owl Carousel
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
			autoplay: true,
			items: 1,
		   loop: true,
		   margin: 0,
		   responsiveClass: true,
		   nav: false,
		   dots: true,
		   autoplayHoverPause: true,
		   smartSpeed: 500,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});

	};

	var bgVideo = function() {
		$('.player').mb_YTPlayer();
	};

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		parallax();
		counter();
		counterWayPoint();
		owlCrouselFeatureSlide();
		bgVideo();
		stickyNavBar();
	});


}());


// Get the container element
var btnContainer = document.getElementById("colorlib-menubar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("a");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




jQuery(document).ready(function(jQuery) {            
	var topMenu = jQuery("#top-menu"),
		offset = 40,
		topMenuHeight = topMenu.outerHeight()+offset,
		// All list items
		menuItems =  topMenu.find('a[href*="#"]'),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var href = jQuery(this).attr("href"),
		  id = href.substring(href.indexOf('#')),
		  item = jQuery(id);
		  //console.log(item)
		  if (item.length) { return item; }
		});

	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = jQuery(this).attr("href"),
		id = href.substring(href.indexOf('#'));
		  offsetTop = href === "#" ? 0 : jQuery(id).offset().top-topMenuHeight+1;
	  jQuery('html, body').stop().animate({ 
		  scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});

	// Bind to scroll
	jQuery(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = jQuery(this).scrollTop()+topMenuHeight;

	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
		 if (jQuery(this).offset().top < fromTop)
		   return this;
	   });

	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";               
	   
	   menuItems.parent().removeClass("active");
	   if(id){
			menuItems.parent().end().filter("[href*='#"+id+"']").parent().addClass("active");
	   }
	   
	})
})



