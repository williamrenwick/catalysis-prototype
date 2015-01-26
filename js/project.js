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
			diff = Math.abs(imgH - textH),
			scrollLimit = textH - $(window).height() + 100,
			scrollLimitImg = imgH - $(window).height() + 100;


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
			diff: diff,
			scrollLimit: scrollLimit,
			imgLimit: scrollLimitImg
		}
	}();


	function scrollSpeed() {
		var start = $('#proj-article-wrap').offset().top,
			windowPos = $(window).scrollTop(),
			pos = windowPos - start,

        	textDiffRatio = (1 / colCompare.scrollLimit) * pos,
        	newPos = textDiffRatio * colCompare.imgLimit;

		/*	imgDiffRatio = (1 / colCompare.scrollLimit) * pos,
        	newPos = imgDiffRatio * colCompare.scrollLimit;
*/
        	console.log(textDiffRatio, newPos);
		

		if (windowPos <= start) {
			var tween = TweenMax.to(colCompare.imgs, 0, { y: 0 });
		} else if (windowPos > start && colCompare.imageH > colCompare.textH) {

			tween = TweenMax.to(colCompare.imgs, 0, { y: - newPos})

		} else if (windowPos > start && colCompare.imageH < colCompare.textH) {

			//console.log(pos, newPos)
			
			tween = TweenMax.to(colCompare.imgs, 0, { y: - newPos });
		} 

		/*if (windowPos > end) {
			console.log('tween end')
			tween.pause();
		}*/
		
	}

	function projViewInit() {	
		fullHeight(projectViewVar.$header);
	};


;
	$(window).scroll(function() {
		scrollSpeed();
	})

	projViewInit();