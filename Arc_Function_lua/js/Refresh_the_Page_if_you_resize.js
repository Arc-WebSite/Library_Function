$(document).ready(function(){

    var cur_width = $(window).width();

    $(window).resize(function(){
        if($(window).width() <= 600 && cur_width > 600){
            //reload
            location.reload();
        }
        else if($(window).width() > 600 && cur_width <= 600){
            //reload
            location.reload();
        }
    });

});