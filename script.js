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
    }, 500);
    
    setTimeout(function() {
        $("#currently-reading-loading-bar").show();
    }, 1000); 

    setTimeout(function() {
        $("#currently-reading-loading-bar").hide();
        $("#currently-reading-loading-bar").css("marginLeft", "65%")
    }, 1500);

    setTimeout(function() {
        $("#currently-reading-loading-bar").show();
    }, 2000);
    
    setTimeout(function() {
        // $("#currently-reading-loading-bar").hide();
        $("#currently-reading").hide();
        $("#currently-reading-loading-bar").css("marginLeft", "0%")
    }, 3000);
}