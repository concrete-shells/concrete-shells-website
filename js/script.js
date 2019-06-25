


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
// calls the function that transitions the landing page background
backgroundSequence();

/* Always show nav when screen size is a certain size */
function nav_resize() {
    var x = document.getElementById("main-nav");
    var w = parseInt(window.innerWidth)
    if(w > 1500) {
        $("#main-nav").css("display", "block");
        $("#main-nav").css("display", "none");
        x.style.display = "block";
    } else {
        $("#main-nav").css("display", "none");
        $("#main-nav").css("display", "block");
        x.style.display = "none";
    }
}

//Call function everytime browser is resized
$(window).resize(function(e) {
    nav_resize();
});

$(document).ready(function(){
    /* preload the navbar so it does not bug out */
    nav_resize();
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
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 71
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    document.body.addEventListener('scroll', () => {

        // gets the scrolling position of non-chrome/firefox browsers
        // since they have a different scroll position, we must use a different method
        var scrollpos = $('#landing-page').offset().top
        scrollpos = Math.abs(scrollpos);

        // microsoft edge and safari browser
        if(isEdge || isSafari){
            if(scrollpos > 100) {
                $('#main-header').addClass('scroll');
            }
            else {
                $('#main-header').removeClass('scroll');
            }
        }
        // every other browser
        else{
            if($(document.body).scrollTop() > 50) {
                $('#main-header').addClass('scroll');
            }
            else {
                $('#main-header').removeClass('scroll');
            }
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

/* For Dropdown menu on non-main pages */
//Makes menu dropdown have a black background when hovered on
$(".hover-menu-item").hover(
    function () {
        $(".submenu").css("background-color", "rgba(0, 0, 0, 0.8)");
        $(".hover-menu-item").css("background-color", "rgba(0, 0, 0, 0.8)");
    }, function(){
        $(".hover-menu-item").css("background-color", "transparent");
    }
);
$(".hover-menu-item-2").hover(
    function () {
        $(".submenu").css("background-color", "rgba(0, 0, 0, 0.8)");
        $(".hover-menu-item-2").css("background-color", "rgba(0, 0, 0, 0.8)");
    }, function(){
        $(".hover-menu-item-2").css("background-color", "transparent");
    }
);

//Scroll Back to Top Button 
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
$(document).ready(function(){ 
    document.body.addEventListener('scroll', () => {
        var Scroll = $(document.body).scrollTop(); // This variable finds the distance you have scrolled from the top.
        if(Scroll >= 200){
            $("#back-to-top-btn").css({
                "display":"block",
                "opacity":"0",
            }).animate({
                "opacity":"1",
            }, 800);
        }else{
            $("#back-to-top-btn").css("display","none");
        }
    });
});

    /* Loading Screen */
    var loading_screen = pleaseWait({
        logo: "../images/LoaderLogo.png",
        backgroundColor: '#474747',
        loadingHtml: '<h4 class="loading-message">The strength of a skyscraper in every structure.<br>Any size, shape, or configuration you can imagine</h4><div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>'
    });
    window.onload = function () {
    $(".loading-message").css({
        "opacity": "0",
        "display": "block",
    }).show().animate({
        "opacity": 1,
    }, 800)
    setTimeout(function(){
        loading_screen.finish();
      }, 3000);
    }