//$(function() {

var open = false;

$('#joinButton').click(function () {
    console.log("asdasd")
    if(open === false) {
        $('#joinButtonContent').animate({ height: '305px' });
        $('#joinButton').animate({ bottom: '305px' });
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


