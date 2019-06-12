$(document).ready(function(){

    /* Annimates the landing page using JQUERY. Slides/fades in when page is loaded */
    /* JQuery functions used: delay() and animate() */
    $(".landing-h1").delay( 800 ).animate({opacity: 1, top: "-10px"}, 800);
    $("#landing-h5").delay( 1600 ).animate({opacity: 1, top: "-10px"}, 800);
    $("#landing-h6").delay( 2400 ).animate({opacity: 1, top: "-10px"}, 800);
    $(".landing-btn").delay( 3200 ).animate({opacity: 1, top: "-10px"}, 800);

});

// i is a counter to go through the array backgroundImg
// the function below is used to constantly change the landing page's background image every 8 seconds
var i = 1;
window.onload = function () {
    var backgroundImg = ['/images/BG4.jpg', '/images/BG5.jpg'];
    // function used to change the image: 1st param is a function, 2nd param is the time delay
    setInterval(changeImage, 8000);

    // function that uses jquery to change the background image
    function changeImage(){
        $('#landing-page').fadeTo('slow', 0.9, function()
        {
            // changes the background image using jquery's css() function
            $(this).css("background-image", "linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url('" + backgroundImg[i] + "')");
        }).fadeTo('slow', 1.25);
        // sets the "counter"
        if(i == 0){
            i = 1;
        }else{
            i = 0;
        }
    }
}