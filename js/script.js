function nav_resize() { /* Always show nav when screen size is a certain size */
    var w = parseInt(window.innerWidth)
    if (w > 1500) { //When width is smaller than 1500, don't display nav bar items
        $("#main-nav").css("display", "block");
        $("#main-nav").css("display", "none");
        document.getElementById("main-nav").style.display = "block";
    } else {
        $("#main-nav").css("display", "none");
        $("#main-nav").css("display", "block");
        document.getElementById("main-nav").style.display = "none";
    }
    if (w >= 1500) { //If width is more than or eq to 1500, show as block always
        $(".navbar-a").click(function () {
            document.getElementById("main-nav").style.display = "block";
        })
    } else { //If width is less than, close display on click
        $(".navbar-a").click(function () {
            document.getElementById("main-nav").style.display = "none";
        })
    }
}

$(window).resize(function (e) { //Call function everytime browser is resized
    nav_resize();
});

function showNav() { /* Display nav when button clicked */
    if (document.getElementById("main-nav").style.display === "none") {
        $("#main-nav").css("display", "block");
        $('header').addClass('scroll');
        $("#main-nav").css({
            "display": "block",
            "opacity": "0",
        }).show().animate({
            "opacity": 1,
        }, 800);
    } else {
        document.getElementById("main-nav").style.display = "none";
        $('header').removeClass('scroll'); //Remove dark background
    }
}

function showSubpageNav() { /* Display the navbar when button is clicked on one of the subpages function */
    if (document.getElementById("main-nav").style.display === "none") {
        document.getElementById("main-nav").style.display = "block";
    } else {
        document.getElementById("main-nav").style.display = "none";
    }
}

function updateActive(id) { // Button Listener for High Tech Construction Tab Panel, Styling the button when clicking; used to "focus" on the active tab
    // removes the current active class
    $(".nav-tab").find(".active-high-tech").find("a").removeClass("active-a");
    $(".nav-tab").find(".high-tech-btn").removeClass("active-high-tech");
    $(".tab-content").find(".tab-pane").removeClass("active");
    // updates the new current active class
    $("#" + id).addClass("active-high-tech");
    $("#" + id).find("a").addClass("active-a");
    $("#tab-" + id).addClass("active");
}

function topFunction() { //Scroll Back to Top Button, When the user clicks on the button, scroll to the top of the document function
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function () {
    nav_resize(); /* preload the navbar so it does not bug out, Makes it so that nav toggle doesnt take 2 clicks */

    /* Transparent until scroll navbar */
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; // Opera 8.0+
    var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)); // Safari 3.0+ "[object HTMLElementConstructor]"
    var isIE = /*@cc_on!@*/false || !!document.documentMode; // Internet Explorer 6-11
    var isEdge = !isIE && !!window.StyleMedia; // Edge 20+
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime); // Chrome 1 - 71
    var isBlink = (isChrome || isOpera) && !!window.CSS; // Blink engine detection
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //Checking if on mobile device
        $("header").css("background", "rgba(0,0,0,0.80)");
    }
    document.body.addEventListener('scroll', () => { //adding scrolling effect to header (black background)
        // gets the scrolling position of non-chrome/firefox browsers
        // since they have a different scroll position, we must use a different method
        var scrollpos = $('.nav-bar-effect').offset().top
        scrollpos = Math.abs(scrollpos);
        if (isEdge || isSafari) { // microsoft edge and safari browser
            if (scrollpos > 100) {
                $('#main-header').addClass('scroll');
            }
            else {
                $('#main-header').removeClass('scroll');
            }
        }
        else { // every other browser
            if ($(document.body).scrollTop() > 50) {
                $('#main-header').addClass('scroll');
            }
            else {
                $('#main-header').removeClass('scroll');
            }
        }
    });

    setTimeout(function () { /* Annimates the landing page using JQUERY. Slides/fades in when page is loaded */
        $(".landing-h1").delay(100).animate({ opacity: 1, top: "-10px" }, 800); /* JQuery functions used: delay() and animate() */
        $("#landing-h5").delay(800).animate({ opacity: 1, top: "-10px" }, 800);
        $("#landing-h6").delay(1500).animate({ opacity: 1, top: "-10px" }, 800);
        $("#landing-h7").delay(2200).animate({ opacity: 1, top: "-10px" }, 800);
        $(".landing-btn").delay(2900).animate({ opacity: 1, top: "-10px" }, 800);
    }, 3000);

    $(".high-tech-btn").click(function () { /* High Tech Construction Page - JS Used to hide the "shown default" tab when another tab is clicked */
        $("#homes").css("display", "none");
    });

    document.body.addEventListener('scroll', () => { //Used for scroll back to the top button, adds button based on position in page, adds effect for btn
        var Scroll = $(document.body).scrollTop(); // This variable finds the distance you have scrolled from the top.
        if (Scroll >= 200) {
            $("#back-to-top-btn").css({
                "display": "block",
                "opacity": "0",
            }).animate({
                "opacity": "1",
            }, 800);
            $(".bidding-btn").css({
                "display": "block",
                "opacity": "0",
            }).animate({
                "opacity": "1",
            }, 800);
        } else {
            $("#back-to-top-btn").css("display", "none");
            $(".bidding-btn").css("display", "none");
        }
    });

    $('.submit').click(function (event) { //Contact Form at footer and for modal
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
    });
});

/* For Dropdown menu on non-main pages, Makes menu dropdown have a black background when hovered on */
$(".hover-menu-item").hover(
    function () {
        $(".submenu").css("background-color", "rgba(0, 0, 0, 0.8)");
        $(".hover-menu-item").css("background-color", "rgba(0, 0, 0, 0.8)");
    }, function () {
        $(".hover-menu-item").css("background-color", "transparent");
    }
);
$(".hover-menu-item-2").hover(
    function () {
        $(".submenu").css("background-color", "rgba(0, 0, 0, 0.8)");
        $(".hover-menu-item-2").css("background-color", "rgba(0, 0, 0, 0.8)");
    }, function () {
        $(".hover-menu-item-2").css("background-color", "transparent");
    }
);