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
		return {
			navFix: navFix
		}
	}();


	colCompare = function() {

		var $article = $('#proj-article-wrap'), 
			$imgs = $('#proj-image-cont'),
			$text = $('#proj-text-cont'),
			imgH = $imgs.height(),
			textH = $text.height(),
			scrollLimit = textH - $(window).height(),
			scrollLimitImg = imgH - $(window).height(),
			ratioArr = (scrollLimitImg > scrollLimit) ? [scrollLimitImg, scrollLimit] : [scrollLimit, scrollLimitImg];
			ratio = ratioArr[0] / ratioArr[1];

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
			ratio: ratio
		}
	}();


	function scrollSpeed() {
		var start = $('#proj-article-wrap').offset().top,
			windowPos = $(window).scrollTop(),
			pos = windowPos - start,
        	end = (start + colCompare.textH) - $(window).height();
			
        console.log(colCompare.ratio);

		if (windowPos <= start) {

			var tween = TweenMax.to(colCompare.imgs, 0, { y: 0 });

		} else if (windowPos > start && colCompare.imageH > colCompare.textH) {

			var tween = TweenMax.to(colCompare.imgs, 0, { y: - pos * colCompare.ratio })

		} else if (windowPos > start && colCompare.imageH < colCompare.textH) {
	
			var tween = TweenMax.to(colCompare.imgs, 0, { y: - pos * colCompare.ratio });
		} 

		if (windowPos > end) {
			tween.kill();
		}
	};

	function projViewInit() {	
		fullHeight(projectViewVar.$header);
	};

	$(window).scroll(function() {
		scrollSpeed();
	})

	projViewInit();