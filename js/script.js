/* Loading Screen */
var loading_screen = pleaseWait({
    logo: "./images/LoaderLogo.png",
    backgroundColor: '#474747',
    loadingHtml: '<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>'
});

window.onload = function () {
    setTimeout(function(){
        loading_screen.finish();
      }, 3000);
}


/* Transitioning background landing page */
/* Array of background images; also stores the variable second that controls how often background should change*/
var bgImageArray = ['/images/BG4.jpg', '/images/BG5.jpg'], secs = 5;
    bgImageArray.forEach(function(img){
        new Image().src = img; 
        // caches images, avoiding white flash between background replacements
    });
    // function that smoothly changes the background
    function backgroundSequence() {
        window.clearTimeout();
        var k = 0;
        for (i = 0; i < bgImageArray.length; i++) {
            setTimeout(function(){ 
                // JQUERY Css function that replaces the background-image of the landing page
                $("#landing-page").css("background-image", "url('" + bgImageArray[k]  + "')");
            if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
            }, (secs * 1000) * i)	
        }
    }
backgroundSequence();

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


$(document).ready(function(){
    /* preload the navbar so it does not bug out */
    $("#main-nav").css("display", "block");
    $("#main-nav").css("display", "none");
})
/* Display nav when button clicked */
function showNav() {
    var x = document.getElementById("main-nav");
    if (x.style.display === "none") {
        $("#main-nav").css("display", "block");
        $('header').addClass('scroll');
        $("#main-nav").css({
            "display": "block",
            "opacity": "0",
        }).show().animate({
            "opacity": 1,
        }, 800);
    } else {
        x.style.display = "none";
    }
}
/* Display the navbar when button is clicked on one of the subpages */
function showSubpageNav() {
    var x = document.getElementById("main-nav");
    if (x.style.display === "none") {
        x.style.display = "block"; 
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


// Button Listener for High Tech Construction Tab Panel
// Styling the button when clicking; used to "focus" on the active tab
function updateActive(id){
    // removes the current active class
    $(".nav-tab").find(".active-high-tech").find("a").removeClass("active-a");
    $(".nav-tab").find(".high-tech-btn").removeClass("active-high-tech");
    $(".tab-content").find(".tab-pane").removeClass("active");
    // updates the new current active class
    $("#" + id).addClass("active-high-tech");
    $("#" + id).find("a").addClass("active-a");
    $("#tab-" + id).addClass("active");
}


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

/* Active navbar change on scroll (Selected section has effect) */
$( document ).ready(function() { // Tells the function to wait to preform until everything on the page has loaded.
    document.body.addEventListener('scroll', () => {
        $("#main-nav").find("a").removeClass("menu-item-white");
        $("#main-nav").find(".current-menu-item").find("a").addClass("menu-item-white");
        var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
                    SectionOneOffset = $('#who-we-serve').offset().top-220, // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
                    SectionTwoOffset = $('#high-tech-construction').offset().top-220; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.
                    SectionThreeOffset = $('#shell-options').offset().top-220;
                    SectionFourOffset = $('#featured-works').offset().top-220;
                    SectionFiveOffset = $('#our-vision').offset().top-220;
                    SectionSixOffset = $('#contact-us').offset().top-220;

        if (Scroll >= SectionOneOffset) { // If you have scrolled past section one do this.
            $(".menu-item-1").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section one do this.
            $(".menu-item-1").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        }
        if (Scroll >= SectionTwoOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
            $(".menu-item-2").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
            $(".menu-item-1").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section two do this.
            $(".menu-item-2").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
        }
        if (Scroll >= SectionThreeOffset) { 
            $(".menu-item-3").addClass("current-menu-item"); 
            $(".menu-item-2").removeClass("current-menu-item");
        } else { 
            $(".menu-item-3").removeClass("current-menu-item");
        }
        if (Scroll >= SectionFourOffset) { 
            $(".menu-item-4").addClass("current-menu-item");
            $(".menu-item-3").removeClass("current-menu-item"); 
        } else { 
            $(".menu-item-4").removeClass("current-menu-item");
        }
        if (Scroll >= SectionFiveOffset) { 
            $(".menu-item-5").addClass("current-menu-item"); 
            $(".menu-item-4").removeClass("current-menu-item");
        } else { 
            $(".menu-item-5").removeClass("current-menu-item");
        }
        if (Scroll >= SectionSixOffset) { 
            $(".menu-item-6").addClass("current-menu-item"); 
            $(".menu-item-5").removeClass("current-menu-item");
        } else { 
            $(".menu-item-6").removeClass("current-menu-item");
        }
    });
});

/* Animating the homepage, "Our Vision" */
/* Hides the elements in our vision, so we can "unhide" and animate it later */
$("#our-vision-text").css({"display":"none", "padding-top":"200px"});
$("#our-vision-image").css({"display":"none", "padding-right":"200px"});
$("#our-vision-seen").css({"display":"none", "padding-left":"200px"});
/* Gets the current scroll position */
document.body.addEventListener('scroll', () => {
    var Scroll = $(document.body).scrollTop();
    /* Gets the scroll position of where Our Vision is located */
    var OurVision = $('#our-vision').offset().top-300;
    /* If scroll position reaches "#our-vision-text", it will animate it */
    if(OurVision <= 50){
        $("#our-vision-text").css({
            "opacity": "0",
            "display": "block",
        }).show().animate({
            "opacity": 1,
            "padding-top": "0px",
        }, 800)
    }
    /* If scroll position reaches "#our-vision-image", it will animate it */
    if(OurVision <= -320){
        $("#our-vision-image").css({
            "opacity": "0",
            "display": "block",
        }).show().animate({
            "opacity": 1,
            "padding-right": "0px",
        }, 800)
    }
    /* If scroll position reaches "#our-vision-seen", it will animate it */
    if(OurVision <= -850){
        $("#our-vision-seen").css({
            "opacity": "0",
            "display": "block",
        }).show().animate({
            "opacity": 1,
            "padding-left": "0px",
        }, 800)
    }
});