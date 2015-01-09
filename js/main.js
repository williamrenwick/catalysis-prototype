$(function(){
	var menuOpen = false;
	var $menu = $(".menu-button");
	var $menuwrapper = $('.menu-wrapper');
	var body = $('body');
	var $menuBar = $('.menu-bar-wrapper');
	var scrollTop;
	var wasActive;

	var menuStyler = {
		/*listPlacement: function() {
			var $menu = $('.menu');

			console.log($menu.height(), $menu.width())

			$menu.css({
				'margin-top': function() {
					return - $menu.height() / 2;
				},
				'margin-left': function() {
					return - $menu.width() / 2;
				}
			})
		}, */
		events: function() {
			var self = this;
			var $lines = $menu.find('.line');
			var $text = $menu.find('.menu-text');
			var $hb = $menu.children('.hamburger');

			$menu.on('mouseenter', function() {

				if (!menuOpen) {
					$lines.addClass('hover');
					$text.addClass('hover');
				} else if (menuOpen) {
					$hb.addClass('closehover');
				}
				
			})
			$menu.on('mouseleave', function() {

				if (!menuOpen) {
					$lines.removeClass('hover');
					$text.removeClass('hover');
				} else if (menuOpen) {
					$hb.removeClass('closehover');
				}
				
			});
			

			$menu.click(function(){
				$this = $(this);

				if(!menuOpen){
					$lines.removeClass('hover');
					$text.removeClass('hover');
					$hb.removeClass('closehover');
					$menuBar.removeClass('bgshow');

					setTimeout(function() {
						$hb.addClass('close');
					}, 700);

					$menuwrapper.fadeIn(function() {
						//self.listPlacement();
						$menuwrapper.children('.menu').addClass('roll-in');
					});

					menuOpen = true;
				} else {

					$hb.removeClass('close');
					$hb.removeClass('closehover');

					if (wasActive) {
						$menuBar.addClass('bgshow');
					}

					$menuwrapper.fadeOut(function() {
						//self.listPlacement();
						$menuwrapper.children('.menu').removeClass('roll-in');
					});

					menuOpen = false;
				}
			})
		},
		scrollCtrl: function() {
			// Hide Header on on scroll down
			var didScroll;
			var lastScrollTop = 0;
			var delta = 5;
			var navbarHeight = $menuBar.outerHeight();

			$(window).scroll(function(event){
			    didScroll = true;
			});

			setInterval(function() {
			    if (didScroll) {
			        hasScrolled();
			        didScroll = false;
			    }
			}, 250);

			function hasScrolled() {
			    var st = $(this).scrollTop();
			    
			    if (st > navbarHeight*2) {
			    	wasActive = true;
			    	$menuBar.addClass('bgshow');

			    } else {
			    	wasActive = false;
			    	$menuBar.removeClass('bgshow');
			    }

			    // Make sure they scroll more than delta
			    if(Math.abs(lastScrollTop - st) <= delta)
			        return;
			    
			    // If they scrolled down and are past the navbar, add class .nav-up.
			    // This is necessary so you never see what is "behind" the navbar.
			    if (st > lastScrollTop && st > navbarHeight){
			        // Scroll Down
			        $menuBar.removeClass('nav-down').addClass('nav-up');
			    } else {
			        // Scroll Up
			        if(st + $(window).height() < $(document).height()) {
			            $menuBar.removeClass('nav-up').addClass('nav-down');
			        }
			    }
			    
			    lastScrollTop = st;
			}
		}
	}

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};
	var resizeFn = debounce(function() {
		//menuStyler.listPlacement();
	}, 0);

	window.addEventListener('resize', resizeFn);

	function initialise() {
		menuStyler.events();
		menuStyler.scrollCtrl()
	}


	initialise();
});