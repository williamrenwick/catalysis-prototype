	/**************************************************************************
	PROJECT VIEW
	***************************************************************************/

	projectViewVar = {
		$header: $('#header')
	}


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

		function setHeight() {
			if(imgH > textH){
				$article.css('height', textH);
			}
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
		secondNav.clickHandler();
	};

	$(window).scroll(function() {
		scrollSpeed();
	})

	projViewInit();