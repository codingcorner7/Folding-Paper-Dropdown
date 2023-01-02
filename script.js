var delay,
  $dropdown = $('.dropdown-menu'),
  $dropdownItems = $dropdown.find('a'),
  timer = $dropdownItems * 100;

$('.wrapper').on('mouseenter', function() {
  clearTimeout(delay);

  $dropdown.addClass('show');

  $dropdownItems.each(function(index) {
    if (!$(this).hasClass('visible')) {
      $(this).css('transition-delay', 100 * index + 'ms');
    }

    $(this).addClass('visible');
  });
});

$('.wrapper').on('mouseleave', function() {

  $dropdownItems.each(function(index) {
    if ($(this).hasClass('visible')) {
      $(this).css('transition-delay', 100 * ($dropdownItems.length - (index + 1)) + 'ms');
    }

    $(this).removeClass('visible');
  });

  delay = setTimeout(function() {
    $dropdown.removeClass('show');
  }, timer);
});