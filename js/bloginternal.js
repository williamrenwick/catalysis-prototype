	/**************************************************************************
	BLOG INTERNAL VIEW
	***************************************************************************/
var mydrag;
	
	blogInternal = function(){
		var $imgs = $('#blog-images'),
			$img = $('.blog-img'),
			totalImgW = 0,
			lastMarginRight = 20,
			windowW = $(window).width();


		function setImgWidth() {
			var marginW = 20;

			$img.each(function() {
				totalImgW += $(this).width() + marginW;
			});

			$imgs.css('width', totalImgW);
		}

		function drag() {

			$imgs.pep({
				axis: 'x',
				cssEaseDuration: 2000,
				velocityMultiplier: 2.5,
				constrainTo: [0, 0, 0, (totalImgW - windowW + lastMarginRight) * -1]
			})

		}
		function update() {
			$.pep.unbind( $imgs );

			windowW = $(window).width();

			

			this.drag = drag;

			drag();
		}

		setImgWidth();

		return {
			drag: drag,
			update: update
		}
	}();


	function blogIntInit() {			
		blogInternal.drag();
	};


	$(function() {
		blogIntInit();
	})
	