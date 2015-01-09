$(function(){

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
	}, 100);

	window.addEventListener('resize', resizeFn);

	createHamburger();
	menuObj.events();
});


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
		
		currentEl.animate({ "left": leftDiff } , 1000 , function(){
				animStop = true;
			});
			
		for(i=0;i<diff;i++)
		{
			currentEl = currentEl.next();
			leftValue = (i+1)*100 + "%";
			currentEl.css("left",leftValue)
			currentEl.animate({ "left": leftDiff } , 1000 , function(){
				animStop = true;
			});
		}
			
	}
	
	else if(diff>0){
		leftDiff = "+=" + diff*100 + "%";
		
		currentEl.animate({ "left": leftDiff } , 1000 , function(){
				animStop = true;
			});
			
		for(i=0;i<diff;i++)
		{
			currentEl = currentEl.prev();
			leftValue = "-" + (i+1)*100 + "%";
			currentEl.css("left",leftValue)
			currentEl.animate({ "left": leftDiff } , 1000 , function(){
				animStop = true;
			});
		}
			
	}
	
	currentEl.addClass("currentSlide");
	
	selectedButton.removeClass("slideshowMenuItemSelected");
	$(this).addClass("slideshowMenuItemSelected");
	
});