////////////////////////////////////////////////////////////////////////////////////On Demand/Global Functions ///////////////////////////////////////////////////////////////////////////////////

function scrollToObj(obj, input, callback) {
	var st = $(this).scrollTop(),
		$filtertext = obj;

	if (input == 'click') {
		$('html, body').animate({
			scrollTop: $filtertext.offset().top
		}, 300);
	}
};


function fullHeight(item) {
		var windowH = $(window).height();

		if (typeof item === 'object'){
			item.css({
				height: windowH
			});
		} else {
			return
		}
};
imgChange = function() {
	function colorImg(obj) {
		var $this = $(obj),
			$img = $this.find('img'),
			src = $img.attr('src'),
			slice = src.slice(0, -7),
			finalSlice = slice + '.png';

		$this.addClass('active').find('img').attr('src', finalSlice);
	};
	function bwImg(obj) {
		var $this = $(obj),
			$img = $this.find('img'),
			src = $img.attr('src'),
			slice = src.slice(0, -4),
			finalSlice = slice + '_bw.png';

		if (src.indexOf('_bw') == -1)
			$this.removeClass('active').find('img').attr('src', finalSlice);
	};
	return {
		colorImg: colorImg,
		bwImg: bwImg
	}
}();


//MAPS

function initializeMap() {
	var MY_MAPTYPE_ID = 'custom_style';
	var mapStyle = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"30"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"0.00"},{"lightness":"74"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"3"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

var myLatlng = new google.maps.LatLng(51.524976,-0.107037);

var image = 'img/marker.png';




	  var mapOptions = {
	  	scrollwheel: false,
          zoomControl: false,
          zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
    },
        panControl: false,
    panControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
	    zoom: 16,
	    center: new google.maps.LatLng(51.524976, -0.107037),
	    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
	  };
	  map = new google.maps.Map(document.getElementById('mapSection'),
	      mapOptions);
	  
	    var styledMapOptions = {
		    name: 'Custom Style'
		  };
	  
	  var customMapType = new google.maps.StyledMapType(mapStyle, styledMapOptions);

	  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	  
	  // To add the marker to the map, use the 'map' property
		var marker = new google.maps.Marker({
		    position: myLatlng,
		    map: map,
		    icon: image
		});
	  
	}

primaryNavControl = function() {
	var lastScrollTop = 0,
		delta = 5,
		navbarHeight = $('.nav').outerHeight(),
		$nav = $('.nav'),
	    bodyBGColor = $('body').css('background-color'),
	    navUpState;

	function navUp() {
		$nav.removeClass('nav-down').addClass('nav-up');
	    $nav.css({
	    	'background-color': bodyBGColor
	    });	
	}
	function navDown() {
		$nav.removeClass('nav-up').addClass('nav-down');
	    if(scrollControl.st < 80)
	    	$nav.css({'background-color': 'transparent'});
	}
	function init() {

		if (scrollControl.st > lastScrollTop && scrollControl.st > navbarHeight) {
			navUp();
		} else if (scrollControl.st + $(window).height() < $(document).height()) {
			navDown();
		}

		lastScrollTop = scrollControl.st;
	}
	return {
		navState: navUpState,
		navScroll: init
	}
}();

scrollControl = function() {
	var didScroll; 
	var st = $(window).scrollTop();

	function hasScrolled() {
	    primaryNavControl.navScroll();	    
	}
	return {
		st: st,
		didScroll: didScroll,
		hasScrolled: hasScrolled
	}
}();

//////////////////////////////////////////////////////////////////////////////////// On Load Functions ///////////////////////////////////////////////////////////////////////////////////
$(function() {
	/////////////////////////////////////////////SCROLL EVENTS//////////////////////////////////////////


	$(window).scroll(function(event){
	    scrollControl.didScroll = true;
	    
	});

	setInterval(function() {

	    if (scrollControl.didScroll) {

	    	scrollControl.st = $(window).scrollTop();

	        scrollControl.hasScrolled(scrollControl.st);
	        secondNav.navFix();

	        scrollControl.didScroll = false;       
	    }
	}, 150);

	/////////////////////////////////////////////MENU EVENTS//////////////////////////////////////////
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
	





	////////////////////////// PAGE-SPECIFIC FUNCTION LOGIC /////////////////////////////

	function specificResize(){
		var pageType = $('#mainwrapper').data('page');

		switch(pageType) {
			case 'homepage':
				//call homepage functions e.g. wrap slider functions/event handlers in obj/function and call here. 
				break;

			case 'our-work':
				fullHeight($intro);			
				break;

			case 'project-view':
				fullHeight(projectViewVar.$header);
				break;
		}
	}


	//////////// INITIALISE FUNCTIONS ////////////

	function init() {
		createHamburger();
		menuObj.events();
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
		specificResize();
	}, 100);

	window.addEventListener('resize', resizeFn);
});