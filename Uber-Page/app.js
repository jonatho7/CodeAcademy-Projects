//This defines the main function.
var main = function() {
    //$( ) tells the computer we're using jQuery.
    //'.icon-menu' uses CSS to select the class called '.icon-menu'
    //.click() means something will happen when the user clicks on the icon-menu HTML element.
    $('.icon-menu').click(function() {
        //animate method. menu's left offset will be set to equal to 0px, over 200ms.
        //Using a period to select a class.
        $('.menu').animate({
            left: '0px'
        }, 200);
        
        //animate method. body's left offset will be set to equal to 0px, over 200ms.
        //Not using a period before body. Why not?
        $('body').animate({
            left: '285px'
        }, 200);
    });
    
    $('.icon-close').click(function(){
        $('.menu').animate({
            left: '-285px'
        }, 200);
        
        $('body').animate({
            left: '0px'
        }, 200);
    });
};

// makes sure the web page has fully loaded before calling the main function.
$(document).ready(main);


