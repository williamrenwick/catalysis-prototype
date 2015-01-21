	/**************************************************************************
	Case Studies Index
	***************************************************************************/

	var $filterBody = $('#filter-body'),
		$filterToggle = $('#filter-toggle'),
		$viewBy = $('.filter-by-item'),
		$intro = $('#intro-wrap');

	$filterToggle.on('click', function() {
		scrollToObj($('#cs-filter-text'), 'click');
		$filterBody.toggleClass('active');
	});

	//click level 1 filter 
	$viewBy.on('click', function() {
		var $this = $(this),
			getID = $(this).attr('id'),
			$services = $('#services.list-cont'),
			$clients = $('#clients.list-cont');

		switch(getID) {
			case 'all':
				moveFade('all');
				filterSelector(this, 'lvl1');		
			break;
			case 'refine-services':
				moveFade('refine');
				filterSelector(this, 'lvl1');
				$services.addClass('active-list').show();
				$('.active-list').find('.filter-item').addClass('active');
			break;
			case 'refine-clients':
				moveFade('refine');
				filterSelector(this, 'lvl1');
				$clients.addClass('active-list').show();
				$('.active-list').find('.filter-item').addClass('active');
			break;
		}
		pushText();
	});

	//click level 2 filter 
	$('.filter-item').on('click', function() {
		filterSelector(this, 'lvl2');
		pushText();
	});

	function moveFade(action) {
		var $filterBy = $('#filter-by'),
			hasClass = $filterBy.attr('class');

		if (action == 'all') {
			$filterBy.addClass('first-state');
		} else if (action == 'refine' && hasClass == 'first-state') {
			$filterBy.removeClass('first-state');
		}
	};


	function filterSelector(obj, level) {
		var $this = $(obj),
			$activeList = $('.active-list'),
			$activeListChildren = $('.active-list').find('.filter-item'),
			$filterByActive = $('.filter-by-item.active'),
			amountActive = $('.active-list').find('.filter-item.active').length;


		if (level == 'lvl1') {

			removeAddActive(true, $this);

		} else if (level == 'lvl2') {

			$this.toggleClass('active');

			amountActive = $('.active-list').find('.filter-item.active').length;

			if (amountActive < 1) {			
				removeAddActive(false, $('#all.filter-by-item'));
				moveFade('all');
			}
		}

		function removeAddActive(children, item) {
			if (typeof children === 'boolean' && children === true) {
				//remove all ticks from level 2 filters
				$activeListChildren.removeClass('active');
			}

			//remove all active classes from other level 1 filters
			$filterByActive.removeClass('active')
			//hide previously active list
			$activeList.removeClass('active-list').hide();
			//add class active to clicked level 1 filter
			item.addClass('active');
		}	
	};

	function pushText() {
		var activeListID = $('.active-list').attr('id'),
			activeLi = $('.active-list').find('.filter-item.active'),
			amountActive = activeLi.length,
			total = $('.active-list').find('.filter-item').length;

		if (amountActive < 1) {
			$filterToggle.text('all');
		} else if (amountActive == 1) {
			var getTxt = activeLi.text();
			$filterToggle.text(getTxt);
		} else if (amountActive > 1 && amountActive < total) {
			$filterToggle.text(amountActive + ' ' + activeListID)
		} else if (amountActive == total) {
			$filterToggle.text('all' + ' ' + activeListID)
		}
	}

	function fullHeight(item) {
		var windowH = $(window).height();

		if (typeof item === 'object'){
			item.css({
				height: windowH
			});
		} else {
			return
		}
	}

	var workItemObj = {
		events: function() {
			var self = this,
				$workItem = $('.work-item'),
				$top = $('.to-top'),
				scrollRunning;
				

			$workItem.on({
				mouseenter: function() {

					if (!scrollRunning) {
						imgChange.colorImg(this);	
					}
				},
				mouseleave: function() {

					if (!scrollRunning)	{
						imgChange.bwImg(this);
					}
				},
				click: function() {

				}
			});	
			$top.on({
				click:function() {
					var $this = $(this),
					scrollTime = 400;

					imgChange.bwImg('.work-item.active');

					scrollRunning = true;
					scrollToObj($('#cs-filter-text'), 'click');

					setTimeout(function() {
						scrollRunning = false;
					}, scrollTime);
				}
			})
		}
	}

	function csIndexInit() {
		workItemObj.events();
		fullHeight($intro);
	};