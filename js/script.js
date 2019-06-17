/* Always show nav when screen size is a certain size */
function nav_resize() {
    var x = document.getElementById("main-nav");
    var w = parseInt(window.innerWidth)
    if(w > 1500) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//Call function everytime browser is resized
$(window).resize(function(e) {
    nav_resize();
});

/* Display nav when button clicked */
function showNav() {
    var x = document.getElementById("main-nav");
    if (x.style.display === "none") {
        x.style.display = "block"; 
        $('header').addClass('scroll');
    } else {
        x.style.display = "none";
        $('header').removeClass('scroll');
    }
}

/* Transparent until scroll navbar */ /* Not Working*/
$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 50) {
            $('header').addClass('scroll');
        }
        else {
            $('header').removeClass('scroll');
        }
    });
});

//Contact Form
$(document).ready(function(){
    $('.submit').click(function(event) {
        console.log('Clicked Button')
        var name = $('.name').val()
        var email = $('.email').val()
        var phone = $('.phonenumber').val()
        var subject = $('.subject').val()
        var relation = $('.relation').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        //Stopping events not working...?
        /* if(name.length > 0) {
            statusElm.append('<div>Name is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Name is not valid</div>')
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if(subject.length >= 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Subject is not valid. Should be 2 characters or longer.</div>')
        }

        if(message.length > 5) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid. Should be 5 characters or longer.</div>')
        } */
    });
});

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
    setInterval(changeImage, 3000);

    // function that uses jquery to change the background image
    function changeImage(){
        $('#landing-page').fadeTo('slow', 0.9, function()
        {
            // changes the background image using jquery's css() function
            $(this).fadeIn().css("background-image", "linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url('" + backgroundImg[i] + "')").fadeIn();
        }).fadeTo('slow', 1.2);
        // sets the "counter"
        if(i == 0){
            i = 1;
        }else{
            i = 0;
        }
    }
}

