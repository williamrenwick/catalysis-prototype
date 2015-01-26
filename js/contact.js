//$(function() {

var open = false;

$('#joinButton').click(function () {
    var distanceToScroll = $(document).height() - $("#joinButton").height() - 300 + "px";
    console.log("asdasd")
    if(open === false) {
        $('#joinButtonContent').animate({ height: distanceToScroll });
        $('#joinButton').animate({ bottom: distanceToScroll });
        open = true;
    } else {
        $('#joinButtonContent').animate({ height: '0px' });
        $('#joinButton').animate({ bottom: '0px' });
        open = false;
    }
});	

$('#applyButton ').click(function () {
    $('#applyNow').animate({ left: '0px' });
})
   

//});    
    
initializeMap();


