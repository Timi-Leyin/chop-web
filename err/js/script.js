(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
   // $('#mainNav').affix({
   //     offset: {
   //         top: 50
   //     }
   // })
	
	// lightbox plugin
	$(function()
		{
			$('[rel="lightbox"]').lightbox();
	});
	
	$(".copyright").after(atob("PGRpdiBjbGFzcz0nY29sLW1kLTYnPjxkaXYgY2xhc3M9J3JpZ2h0LXRleHQnPkRlc2lnbiAmYW1wOyBEZXZlbG9wZWQgYnk6IDxhIGhyZWY9J2h0dHBzOi8vYm9vdHN0cmFwd2VidGVtcGxhdGVzLmNvbS8nIHRhcmdldD0nX2JsYW5rJz5Cb290c3RyYXAgV2Vic2l0ZSBUZW1wbGF0ZXM8L2E+PC9kaXY+PC9kaXY="));


})(jQuery); // End of use strict