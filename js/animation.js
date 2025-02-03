// EXPLORE SCROLL
$(".explore").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
});

// MENU
$(document).ready(function () {
    const $menuToggle = $("#menu-toggle");
    const $menuLinks = $("#menu-links");
    const $closeMenu = $("#close-menu .close-button");

    // Toggle the menu visibility
    $menuToggle.on("click", function (e) {
        e.stopPropagation();
        $menuLinks.toggleClass("visible");
    });

    // Close the menu when clicking the close button
    $closeMenu.on("click", function () {
        $menuLinks.removeClass("visible");
    });

    // Close the menu when clicking anywhere outside
    $(document).on("click", function (e) {
        if (!$(e.target).closest("#menu-links, #menu-toggle").length) {
        $menuLinks.removeClass("visible");
        }
    });
});

// FADE IN for larger screens only
$(window).on('scroll', function() {
    // Check if the screen width is greater than 1200px (for bigger screens)
    if ($(window).width() > 1200) {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var windowHeight = $(window).scrollTop() + $(window).height();

            // Check if the element is in the viewport
            if (windowHeight > elementTop + 200) { // Adjust the 200 if needed
                $(this).addClass('fade-in-visible');
            }
        });
    } else {
        // Reset opacity to 0 for smaller screens
        $('.fade-in').removeClass('fade-in-visible').css('opacity', '1');
    }
});

//Header shadow when scrolled
$(document).ready(function() {
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 50) { // Adjust scroll threshold if needed
            $("#header").css("box-shadow", "0 4px 10px rgba(0, 0, 0, 0.2)");
        } else {
            $("#header").css("box-shadow", "none");
        }
    });
});