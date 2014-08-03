var main = function() {
  /* The .click() method attaches an event handler to an HTML element
   * so that it can respond to a click event. */
  $(".like-button").click(function() {
    //Toggle the active class. This alternates the button between the normal grey
    //view and the selected blue view.
    $(this).toggleClass("active");
  });
  
  
  $('.social li').click(function() {
    //$(this) is used to refer to the HTML element that was clicked on.
    $(this).toggleClass('active');
  });
  
};

$(document).ready(main);