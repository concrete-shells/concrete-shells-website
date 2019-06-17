/* Loading Screen */
var loading_screen = pleaseWait({
    logo: "./images/Logo.png",
    backgroundColor: '#474747',
    loadingHtml: '<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>'
});

window.onload = function () {
    setTimeout(function(){
        loading_screen.finish();
      }, 3000);
}


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
    }
}

/* Transparent until scroll navbar */
$(document).ready(function() {
    document.body.addEventListener('scroll', () => {
        if($(document.body).scrollTop() > 50) {
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
        var location = $('.location').val()
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
    setTimeout(function(){
        $(".landing-h1").delay( 800 ).animate({opacity: 1, top: "-10px"}, 800);
        $("#landing-h5").delay( 1600 ).animate({opacity: 1, top: "-10px"}, 800);
        $("#landing-h6").delay( 2400 ).animate({opacity: 1, top: "-10px"}, 800);
        $(".landing-btn").delay( 3200 ).animate({opacity: 1, top: "-10px"}, 800);
    }, 3000);
});

/* High Tech Construction Page */
$(document).ready(function(){
    /* Used to hide the "shown default" tab when another tab is clicked */
    $(".high-tech-btn").click(function(){
        $("#homes").css("display", "none");
    });
});


/* Lightbox popup modal for images in featured works */
lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    disableScrolling: true,
    wrapAround: true,
})
