var servicesOpen = false;

$('.serviceButton').click(function () {
    
    if(servicesOpen === false) {
        $('#servicesInfoSection').animate({ left: "-50%" });
        $('#servicesList').animate({ left: "0%" });
        $('#servicesContent').animate({ left: "50%" });
        
        var serviceName = "#" + $(this).attr("data-service");
        $(serviceName).fadeIn().addClass("serviceShow");
        
        $(this).addClass("currentService");
        
        servicesOpen = true;
    } else {
        $(".currentService").removeClass("currentService");
        $(".serviceShow").fadeOut().removeClass("serviceShow");
        var serviceName = "#" + $(this).attr("data-service");
        $(serviceName).fadeIn().addClass("serviceShow");
        $(this).addClass("currentService");
    }
});	


$("#closeServices").click(function(){
    $(".serviceShow").fadeOut().removeClass("serviceShow");
    $('#servicesInfoSection').animate({ left: "0%" });
    $('#servicesList').animate({ left: "50%" });
    $('#servicesContent').animate({ left: "100%" });
    $(".currentService").removeClass("currentService");
    servicesOpen = false;
});


