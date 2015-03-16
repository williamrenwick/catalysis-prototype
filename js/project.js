	/**************************************************************************
	PROJECT VIEW
	***************************************************************************/

	projectViewVar = {
		$header: $('#header'),
		$headerTxt: $('#header-txt-cont'),
		$hdrImgFront: $('#header-image-front'),
		$hdrImgBack: $('.header-image-back')
	}

	parallaxBG = function() {
		var	$flicker = $('.flicker');

		function initParallax() {	
			var $scene = $('#scene');
			
			$scene.parallax({
			  calibrateX: false,
			  calibrateY: false,
			  invertX: false,
			  invertY: false,
			  limitX: false,
			  limitY: false,
			  scalarX: 4,
			  scalarY: 4,
			  frictionX: 0.2,
			  frictionY: 0.8,
			  originX: 0.5,
			  originY:0.5
			});
			
			$flicker.css('display', 'none');
		}
		

		function flicker() {

			var maxFlick = 6,
				amount = Math.round(Math.random() * maxFlick),
				delta = 1,
				timer = Math.round((Math.random() + delta) * 100);

			var doneFlicks = 0;

			var flickInterval = setInterval(showHide, timer);

			function showHide() {
				timer = Math.round((Math.random() + delta) * 100)

				$flicker.show();

				var hide = setTimeout(function() {
					$flicker.hide();
					doneFlicks++
				}, 20)

				if (doneFlicks == amount) {
					clearInterval(flickInterval);
				}
			}		
		}

		return {
			flicker: flicker,
			initParallax: initParallax
		}
	}();


	secondNav = function() {
		var $secondNav = $('#second-nav');

		function navFix() {
			
			var navPos = projectViewVar.$header.height();

			if (scrollControl.st < navPos) {
				$secondNav.removeClass('fixed');
				$secondNav.removeClass('down');
			} else if (scrollControl.st >= navPos) {
				var navState = $('.nav').hasClass('nav-down'); 

				$secondNav.addClass('fixed');

				if (navState) {
					$secondNav.addClass('down');
				} else {
					$secondNav.removeClass('down');
				}
			}
		}
		function events(addclass) {
			var $inner = $('#second-nav-innerwrap');

			$inner.toggleClass(addclass);		
		}
		function clickHandler() {
			var $socialBtn = $('#proj-social-btn');

			$socialBtn.on('click', function() {
				events('move-left');
			})
		}

		return {
			navFix: navFix,
			clickHandler: clickHandler
		}
	}();


	colCompare = function() {

		var $article = $('#proj-article-wrap'), 
			$imgs = $('#proj-image-cont'),
			$text = $('#proj-text-cont'),
			$windowH = $(window).height(),
			imgH = $imgs.height(),
			textH = $text.height(),
			scrollLimit = textH - $windowH ,
			scrollLimitImg = imgH - $windowH,
			ratioArr = (scrollLimitImg > scrollLimit) ? [scrollLimitImg, scrollLimit] : [scrollLimit, scrollLimitImg];
			ratio = ratioArr[0] / ratioArr[1];

		function setHeight() {
			$article.css('height', textH);
		}		

		function update() {
			$windowH = $(window).height(),
			imgH = $imgs.height(),
			textH = $text.height(),
			scrollLimit = textH - $windowH,
			scrollLimitImg = imgH - $windowH,
			ratioArr = (scrollLimitImg > scrollLimit) ? [scrollLimitImg, scrollLimit] : [scrollLimit, scrollLimitImg];
			ratio = ratioArr[0] / ratioArr[1];

			this.imageH = imgH;
			this.textH = textH;
			this.scrollLimit = scrollLimit;
			this.ratio = ratio;

			setHeight();
		}

		setHeight();

		return {
			imageH: imgH,
			textH: textH,
			imgs: $imgs,
			scrollLimit: scrollLimit,
			ratio: ratio,
			update: update
		}
	}();


	function scrollSpeed() {
		var start = $('#proj-article-wrap').offset().top,
			windowPos = $(window).scrollTop(),
			pos = windowPos - start,
        	end = (start + colCompare.textH) - $(window).height();



		if (windowPos <= start) {

			var tween = TweenMax.to(colCompare.imgs, 0, { y: 0 });

		} else if ((windowPos > start) && (colCompare.imageH > colCompare.textH) && (pos < colCompare.scrollLimit)) {

			tween = TweenMax.to(colCompare.imgs, 0, { y: - (pos * colCompare.ratio) + pos })

		} else if ((windowPos > start) && (colCompare.imageH < colCompare.textH) && (pos < colCompare.scrollLimit)) {

			tween = TweenMax.to(colCompare.imgs, 0, { y: - ( pos / colCompare.ratio ) + pos });
		} 
	};

	function projViewInit() {	
		fullHeight(projectViewVar.$header);
		parallaxBG.initParallax();
		secondNav.clickHandler();
	};

	setInterval(parallaxBG.flicker, 3000)

	$(window).scroll(function() {
		scrollSpeed();
	})

	$(function() {
		projViewInit();
	});
	