
$(function() {
	/////////////////////////////////////////////SCROLL EVENTS//////////////////////////////////////////

	// Hide Header on on scroll down
	var didScroll;
	var scrollHasRun = false;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.nav').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
			scrollToObj($('#cs-filter-text'), 'scroll');
	        didScroll = false;       
	    }
	}, 50);

	function scrollToObj(obj, input, callback) {
		var st = $(this).scrollTop(),
			$filtertext = obj,
			$scrollPast = $('#scroll-indicator').offset().top;

		if (st > $scrollPast && scrollHasRun == false && input == 'scroll') {

			$('html, body').animate({
				scrollTop: $filtertext.offset().top
			}, 300);

			setTimeout(function() { scrollHasRun = true }, 100)
		} else if (input == 'click') {
			$('html, body').animate({
				scrollTop: $filtertext.offset().top
			}, 300);
		}
	};

	function hasScrolled() {
	    var st = $(this).scrollTop(),
	    	$nav = $('.nav'),
	    	bodyBGColor = $('body').css('background-color');
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $nav.removeClass('nav-down').addClass('nav-up');
	        $nav.css({
	        	'background-color': bodyBGColor
	        });
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $nav.removeClass('nav-up').addClass('nav-down');
	            if(st < 80)
	            	$nav.css({'background-color': 'transparent'});
	        }
	    }
	    
	    lastScrollTop = st;
	}

	function createHamburger() {
		var mobile = $('<div>').addClass('nav-mobile'),
			$nav = $('.nav');

			//add 'nav-mobile' div to 'nav' elem
			$nav.append(mobile);

			//add lines to mobile 
			for (i = 0; i < 3; i++) {
				var line = $('<div>').addClass('line'),
				$navMob = $('.nav-mobile');

				$navMob.append(line);
			};
	};

	var menuObj = {
		events: function() {
			var $menubtn = $('.nav-mobile'),
				$menuList = $('.nav-list'),
				$fullMenu = $('#full-page-menu'),
				$navItem = $('.item-select'),
				menuOpen = false;

			$navItem.on({
				click: function() {
					var $this = $(this),
						type = $this.attr('class'),
						elIndex = $this.index(),
						$active = $('.item-select.active');

					console.log(type.indexOf('full-item'));
					console.log(type.indexOf('nav-item'));

					//remove all active classes
					$active.removeClass('active');

					//add active class to clicked elem
					$this.addClass('active');

					//add active class to related item on opposing menu
					if (type.indexOf('full-item') == 0) {
						var $item = $('.nav-item'),
							itemIndex = $item.eq(elIndex);

						itemIndex.addClass('active');
					} else if (type.indexOf('nav-item') == 0) {
						var $fullItem = $('.full-item'),
							fullIndex = $fullItem.eq(elIndex);

						fullIndex.addClass('active');
					}
				}
			})
			
			$menubtn.on('click', function() {
				$this = $(this);
				if (!menuOpen) {
					$this.addClass('close');

					$fullMenu.fadeIn();
					//call function that creates menu list and sizes it correctly
					menuOpen = true;
				} else {
					$this.removeClass('close');

					$fullMenu.fadeOut();
					//call function that removes menu list and sizes it correctly
					menuOpen = false;
				}
			});
		},
		hideFullMenu: function() {
			var $fullMenu = $('#full-page-menu'),
				windowW = $(window).width(),
				$menubtn = $('.nav-mobile');

			if (windowW > 768) {
				$fullMenu.css({'display': 'none'});
				$menubtn.removeClass('close');
			}
		}
	};
	

	/*
	SLIDESHOW CONTROL
	*/
	var animStop = true;

	$("#arrowRight").click(function(){
		
		if(animStop){
			
		animStop = false;

		var currentSlide   = $(".currentSlide"),
			nextSlide	   = currentSlide.next('.slide'),
			selectedButton = $(".slideshowMenuItemSelected"),
			nextButton	   = selectedButton.next('.slideshowMenuItem');
			
		if(nextSlide.length==0)	
		{
			nextSlide = $('.slide').first();
			nextButton = $('.slideshowMenuItem').first();
		}
		
		currentSlide.animate({ "left": "-100%" } );
		nextSlide.css("left","100%")
		
		
		nextSlide.animate({ "left": "0%" } ,function(){
			animStop = true;
		});
		
		currentSlide.removeClass("currentSlide");
		nextSlide.addClass("currentSlide");
		
		selectedButton.removeClass("slideshowMenuItemSelected");
		nextButton.addClass("slideshowMenuItemSelected");
		
		
		}

	});

	$("#arrowLeft").click(function(){
		
		if(animStop){
		
		animStop = false;

		var currentSlide   = $(".currentSlide"),
			prevSlide	   = currentSlide.prev('.slide'),
			selectedButton = $(".slideshowMenuItemSelected"),
			prevButton	   = selectedButton.prev('.slideshowMenuItem');
			
		if(prevSlide.length==0)	
		{
			prevSlide = $('.slide').last();
			prevButton = $('.slideshowMenuItem').last();
		}
		
		currentSlide.animate({ "left": "100%" } );
		prevSlide.css("left","-100%")
		prevSlide.animate({ "left": "0%" } ,function(){
			animStop = true;
		});
		
		currentSlide.removeClass("currentSlide");
		prevSlide.addClass("currentSlide");
		
		selectedButton.removeClass("slideshowMenuItemSelected");
		prevButton.addClass("slideshowMenuItemSelected");
		
		}
	});

	var test

	$(".slideshowMenuItem").click(function(){
		var currentSlideN  = $(".currentSlide").index(),
			clickedSlideN  = $(this).index();
		var selectedButton = $(".slideshowMenuItemSelected");
		var currentEl	   = $(".currentSlide");
		currentEl.removeClass("currentSlide");
		
		var diff = currentSlideN - clickedSlideN;
		
		if(diff<0){
			diff *= -1; 
			leftDiff = "-=" + diff*100 + "%";
			
			currentEl.animate({ "left": leftDiff } , 400 , function(){
					animStop = true;
				});
				
			for(i=0;i<diff;i++)
			{
				currentEl = currentEl.next();
				leftValue = (i+1)*100 + "%";
				currentEl.css("left",leftValue)
				currentEl.animate({ "left": leftDiff } , 400 , function(){
					animStop = true;
				});
			}
				
		}
		
		else if(diff>0){
			leftDiff = "+=" + diff*100 + "%";
			
			currentEl.animate({ "left": leftDiff } , 400 , function(){
					animStop = true;
				});
				
			for(i=0;i<diff;i++)
			{
				currentEl = currentEl.prev();
				leftValue = "-" + (i+1)*100 + "%";
				currentEl.css("left",leftValue)
				currentEl.animate({ "left": leftDiff } , 400 , function(){
					animStop = true;
				});
			}
				
		}
		
		currentEl.addClass("currentSlide");
		
		selectedButton.removeClass("slideshowMenuItemSelected");
		$(this).addClass("slideshowMenuItemSelected");	
	});

	/**************************************************************************
	Case Studies
	***************************************************************************/

	var $filterBody = $('#filter-body'),
		$filterToggle = $('#filter-toggle'),
		$viewBy = $('.filter-by-item'),
		$intro = $('#intro-wrap');

	$filterToggle.on('click', function() {
		scrollToObj($('#cs-filter-text'), 'click');
		$filterBody.toggleClass('active');
	});

	//click level 1 filter 
	$viewBy.on('click', function() {
		var $this = $(this),
			getID = $(this).attr('id'),
			$services = $('#services.list-cont'),
			$clients = $('#clients.list-cont');

		switch(getID) {
			case 'all':
				moveFade('all');
				filterSelector(this, 'lvl1');		
			break;
			case 'refine-services':
				moveFade('refine');
				filterSelector(this, 'lvl1');
				$services.addClass('active-list').show();
				$('.active-list').find('.filter-item').addClass('active');
			break;
			case 'refine-clients':
				moveFade('refine');
				filterSelector(this, 'lvl1');
				$clients.addClass('active-list').show();
				$('.active-list').find('.filter-item').addClass('active');
			break;
		}
		pushText();
	});

	//click level 2 filter 
	$('.filter-item').on('click', function() {
		filterSelector(this, 'lvl2');
		pushText();
	});

	function moveFade(action) {
		var $filterBy = $('#filter-by'),
			hasClass = $filterBy.attr('class');

		if (action == 'all') {
			$filterBy.addClass('first-state');
		} else if (action == 'refine' && hasClass == 'first-state') {
			$filterBy.removeClass('first-state');
		}
	};


	function filterSelector(obj, level) {
		var $this = $(obj),
			$activeList = $('.active-list'),
			$activeListChildren = $('.active-list').find('.filter-item'),
			$filterByActive = $('.filter-by-item.active'),
			amountActive = $('.active-list').find('.filter-item.active').length;


		if (level == 'lvl1') {

			removeAddActive(true, $this);

		} else if (level == 'lvl2') {

			$this.toggleClass('active');

			amountActive = $('.active-list').find('.filter-item.active').length;

			if (amountActive < 1) {			
				removeAddActive(false, $('#all.filter-by-item'));
				moveFade('all');
			}
		}

		function removeAddActive(children, item) {
			if (typeof children === 'boolean' && children === true) {
				//remove all ticks from level 2 filters
				$activeListChildren.removeClass('active');
			}

			//remove all active classes from other level 1 filters
			$filterByActive.removeClass('active')
			//hide previously active list
			$activeList.removeClass('active-list').hide();
			//add class active to clicked level 1 filter
			item.addClass('active');
		}	
	};

	function pushText() {
		var activeListID = $('.active-list').attr('id'),
			activeLi = $('.active-list').find('.filter-item.active'),
			amountActive = activeLi.length,
			total = $('.active-list').find('.filter-item').length;

		if (amountActive < 1) {
			$filterToggle.text('all');
		} else if (amountActive == 1) {
			var getTxt = activeLi.text();
			$filterToggle.text(getTxt);
		} else if (amountActive > 1 && amountActive < total) {
			$filterToggle.text(amountActive + ' ' + activeListID)
		} else if (amountActive == total) {
			$filterToggle.text('all' + ' ' + activeListID)
		}
	}

	function fullHeightWidth(item) {
		var windowW = $(window).width(),
			windowH = $(window).height(),
			menuHeight = 81;

		if (typeof item === 'object'){
			item.css({
				width: windowW,
				height: windowH - menuHeight
			});
		} else {
			return
		}
	}

	var workItemObj = {
		events: function() {
			var self = this,
				$workItem = $('.work-item'),
				$top = $('.to-top'),
				bwCheck = '_bw',
				scrollRunning;
				

			$workItem.on({
				mouseenter: function() {
					var $this = $(this),
						$img = $this.find('img'),
						src = $img.attr('src'),
						slice = src.slice(0, -7),
						finalSlice = slice + '.png';

					if (!scrollRunning) {
						$this.addClass('active').find('img').attr('src', finalSlice);
					}
				},
				mouseleave: function() {
					var $this = $(this),
						$img = $this.find('img'),
						src = $img.attr('src'),
						slice = src.slice(0, -4),
						finalSlice = slice + '_bw.png';

					if (!scrollRunning && src.indexOf(bwCheck) == -1)	{
						$this.removeClass('active').find('img').attr('src', finalSlice);
					}
				}
			});	
			$top.on({
				click:function() {
					var $this = $(this),
					scrollTime = 300;

					scrollRunning = true;

					scrollToObj($('#cs-filter-text'), 'click');

					setTimeout(function() {
						scrollRunning = false;
					}, scrollTime);
				}
			})
		},
	}


	//////////// INITIALISE FUNCTIONS ////////////

	function init(){
		var bodyClass = $('body').attr('class');

		createHamburger();
		menuObj.events();

		if (bodyClass == 'our-work') {
			csIndexInit();
			workItemObj.events();
		}
	};


	function csIndexInit() {
		fullHeightWidth($intro);
	};

	init();
	//resize functions
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
		menuObj.hideFullMenu();
		fullHeightWidth($intro);
	}, 100);

	window.addEventListener('resize', resizeFn);
});