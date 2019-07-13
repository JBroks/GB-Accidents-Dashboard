// Back to top button

/**
 * Function implements smooth scrolling back to top after clicking the button
 */

let btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(d) {
  d.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Fix for the touch screen hover effect issue 

/**
 * jQuery solution to sticky hover on touch screen devices
 */

$("a:").on("touchend", function(e) { $(this).focus(); });