	/**************************************************************************
	BLOG INTERNAL VIEW
	***************************************************************************/

	
	blogInternal = function(){
		var $imgs = $('#blog-images'),
			$img = $('.blog-img'),
			totalImgW = 0,
			windowW = $(window).width();

		var x1, x2,
        	y1, y2,
        	t1, t2;  // Time

    	var minDistance = 40; // Minimum px distance object must be dragged to enable momentum.

	    var onMouseMove = function(e) {
	        var mouseEvents = $d.data("mouseEvents");
	        if (e.timeStamp - mouseEvents[mouseEvents.length-1].timeStamp > 40) {
	            mouseEvents.push(e);
	            if (mouseEvents.length > 2) {
	                mouseEvents.shift();
	            }
	        }
	    }


		function setImgWidth() {
			var marginW = 40;

			$img.each(function() {
				totalImgW += $(this).width() + marginW
			});

			$imgs.css('width', totalImgW);
		}

		function drag() {
			var marginW = 40,
				end = - totalImgW + (windowW + marginW);

			$imgs.draggable({
				axis: 'x',
				stop: function(e, ui) {
					if (ui.position.left > 0) {
						console.log('hello');
						$imgs.animate({'left': '0px'}, 200);
					} else if (ui.position.left <  end) {
						console.log('hello2');
						$imgs.animate({'left': end}, 200);
					}
				}
			});
		}

		return {
			drag: drag,
			imgsWidth: setImgWidth
		}
	}();


	function blogIntInit() {			
		blogInternal.imgsWidth();
		blogInternal.drag();

	};


	$(function() {
		blogIntInit();
	})
	


			/*$imgs.draggable({
				axis: 'x',
				stop: function(e, ui) {
					if (ui.position.left > 0) {
						console.log('hello');
						$imgs.animate({'left': '0px'}, 200);
					} else if (ui.position.left <  end) {
						console.log('hello2');
						$imgs.animate({'left': end}, 200);
					}
				}
			});*/