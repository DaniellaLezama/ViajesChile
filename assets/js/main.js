$(document).ready(function () {
    //barra de navegación cambia de color
    $(window).scroll(function(){    
        if($("#inicio").offset().top > 300){
            $("#inicio").removeClass("bg-transparent");
            $("#inicio").addClass("bgnice");
        } 
        else{$("#inicio").removeClass("bgnice")};
        });
});