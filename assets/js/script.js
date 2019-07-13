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