$(document).ready(function() {

    overlayStartUp();
    
    $("#currently-reading-overlay").on("click", function() { 
        $("#currently-reading").hide();
    })

    $("#currently-reading").on("click", function() { 
        $("#currently-reading").hide();
    })

    $("#info").on("click", function() { 
        $("#currently-reading").show();
    })
});


function overlayStartUp() {
    $("#currently-reading").show();
    $("#currently-reading-overlay").show();

    setTimeout(function() {
        $("#currently-reading-loading-bar").hide();
        $("#currently-reading-loading-bar").css("marginLeft", "35%")
    }, 250);
    
    setTimeout(function() {
        $("#currently-reading-loading-bar").show();
    }, 500); 

    setTimeout(function() {
        $("#currently-reading-loading-bar").hide();
        $("#currently-reading-loading-bar").css("marginLeft", "65%")
    }, 750);

    setTimeout(function() {
        $("#currently-reading-loading-bar").show();
    }, 1000);
    
    setTimeout(function() {
        // $("#currently-reading-loading-bar").hide();
        $("#currently-reading").hide();
        $("#currently-reading-loading-bar").css("marginLeft", "0%")
    }, 2000);
}
