	/**************************************************************************
	BLOG INDEX VIEW
	***************************************************************************/

	blogIndexSpace = function() {
		var $moreBlogsBtn = $('#blog-idx-more-btn'),
			$blogSingle = $('#blog-idx-wrap'),
			$blogMany = $('#blog-idx-many-wrap'),
			$blogManyClose = $('#blog-idx-many-close');

		function events() {

			$moreBlogsBtn.on('click', function() {
				$blogSingle.fadeOut(400, function() {
					$blogMany.fadeIn(200).addClass('active');
					$blogManyClose.addClass('visible');
				});
			});
			$blogManyClose.on('click', function() {

				$blogManyClose.removeClass('visible');
				$blogMany.removeClass('active').delay(400).fadeOut(400, function() {
					$blogSingle.fadeIn(200);
				});
			});
		}

		return {
			events: events
		}
	}();

	$(function() {
		blogIndexSpace.events();
	});