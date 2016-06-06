jQuery(document).ready(function($) {
  /*Navigation*/
  $("a.x").click(function() {
    $(".nav-logo").toggleClass("open");
    $(this).toggleClass("open");
    $("#nav").toggleClass("open");
  });

  var lastScrollTop = 0;

  var timer;

  function shrink() {
    console.log('down');
    // scrolling down
    if ($('.x').data('size') === 'big' && !$('#nav').hasClass('open')) {
      $('.x').data('size', 'small');
      $('.x').removeClass('down').addClass('up');
    }
  }

  function grow() {
    if ($('.x').data('size') === 'small') {
      console.log('up');
      $('.x').data('size', 'big');
      $('.x').removeClass('up').addClass('down');
    }
  }

  $('.navicon-button').hover(function() {
        clearTimeout(timer);
      },
      function() {
        timer = setTimeout(function() {
          if ($(window).scrollTop() > 500 && !$('#nav').hasClass('open')) {
            shrink();
          } else {
            grow();
          }
        }, 0);
      }
  );

  $(window).scroll(function() {

    var st = $(this).scrollTop();

    clearTimeout(timer);

    if (st > lastScrollTop && $(window).scrollTop() > 500 && !$('#nav').hasClass('open')) {
      shrink();
    } else {
      grow();
    }
    lastScrollTop = st;
    timer = setTimeout(function() {
      if (st > 500 && !$('#nav').hasClass('open')) {
        shrink();
      }
    }, 3000);
  });

});