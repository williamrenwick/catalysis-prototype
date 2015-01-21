	/**************************************************************************
	HOMEPAGE LOGIC
	***************************************************************************/	
//$(function () {
	var animStop = true;

	$("#arrowRight").on('click', function(){
		
		if(animStop){
			
		animStop = false;

		var currentSlide   = $(".currentSlide"),
			nextSlide	   = currentSlide.next('.slide'),
			selectedButton = $(".slideshowMenuItemSelected"),
			nextButton	   = selectedButton.next('.slideshowMenuItem');
		
		console.log(currentSlide,nextSlide,selectedButton,nextButton)

		if(nextSlide.length==0)	
		{
			nextSlide = $('.slide').first();
			nextButton = $('.slideshowMenuItem').first();
		}
		
		currentSlide.animate({ "left": "-100%" } );
		nextSlide.css("left","100%")
		
		
		nextSlide.animate({ "left": "0%" } ,function(){
			animStop = true;
		});
		
		currentSlide.removeClass("currentSlide");
		nextSlide.addClass("currentSlide");
		
		selectedButton.removeClass("slideshowMenuItemSelected");
		nextButton.addClass("slideshowMenuItemSelected");
		
		
		}

	});

	$("#arrowLeft").on('click', function(){
		
		if(animStop){
		
		animStop = false;

		var currentSlide   = $(".currentSlide"),
			prevSlide	   = currentSlide.prev('.slide'),
			selectedButton = $(".slideshowMenuItemSelected"),
			prevButton	   = selectedButton.prev('.slideshowMenuItem');
			
		if(prevSlide.length==0)	
		{
			prevSlide = $('.slide').last();
			prevButton = $('.slideshowMenuItem').last();
		}
		
		currentSlide.animate({ "left": "100%" } );
		prevSlide.css("left","-100%")
		prevSlide.animate({ "left": "0%" } ,function(){
			animStop = true;
		});
		
		currentSlide.removeClass("currentSlide");
		prevSlide.addClass("currentSlide");
		
		selectedButton.removeClass("slideshowMenuItemSelected");
		prevButton.addClass("slideshowMenuItemSelected");
		
		}
	});

	var test

	$(".slideshowMenuItem").click(function(){
		var currentSlideN  = $(".currentSlide").index(),
			clickedSlideN  = $(this).index();
		var selectedButton = $(".slideshowMenuItemSelected");
		var currentEl	   = $(".currentSlide");
		currentEl.removeClass("currentSlide");
		
		var diff = currentSlideN - clickedSlideN;
		
		if(diff<0){
			diff *= -1; 
			leftDiff = "-=" + diff*100 + "%";
			
			currentEl.animate({ "left": leftDiff } , 400 , function(){
					animStop = true;
				});
				
			for(i=0;i<diff;i++)
			{
				currentEl = currentEl.next();
				leftValue = (i+1)*100 + "%";
				currentEl.css("left",leftValue)
				currentEl.animate({ "left": leftDiff } , 400 , function(){
					animStop = true;
				});
			}
				
		}
		
		else if(diff>0){
			leftDiff = "+=" + diff*100 + "%";
			
			currentEl.animate({ "left": leftDiff } , 400 , function(){
					animStop = true;
				});
				
			for(i=0;i<diff;i++)
			{
				currentEl = currentEl.prev();
				leftValue = "-" + (i+1)*100 + "%";
				currentEl.css("left",leftValue)
				currentEl.animate({ "left": leftDiff } , 400 , function(){
					animStop = true;
				});
			}
				
		}
		
		currentEl.addClass("currentSlide");
		
		selectedButton.removeClass("slideshowMenuItemSelected");
		$(this).addClass("slideshowMenuItemSelected");	
	});

//})
	