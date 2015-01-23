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


	function projViewInit() {	
		fullHeight(projectViewVar.$header);
	};

	projViewInit();