(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  var navbarLinksToggle = function() {
    if($(window).width() > 992) { return; }
    var time = 100;

    $('.nav-link').each(function() {
      var l = $(this);
      setTimeout(function() {
        l.toggleClass('show');
      }, time);
      time += 100;
    });
  };

  // Closes responsive menu when a scroll trigger link is clicked
  // $('.js-scroll-trigger').click(function() {
  //   $('.navbar-collapse').collapse('hide');
  //   navbarLinksToggle();
  // });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });
  $(window).scroll(function() {
    if($('.share-bar').offset() != undefined) {
      if($('.share-bar').offset().top < $('#more').position().top) {
        $('.share-bar').addClass('active');
      } else {
        $('.share-bar').removeClass('active');
      }
    }
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $('.navbar-toggler').click(function() {
    navbarLinksToggle();
  });

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-article-box', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  /* Search Function */
  function search() {
    if($('#search').val() != '') {
      $('#resources').find('.article-box').each(function() {
        if($(this).find('.description').find('h4').html().toUpperCase().indexOf($('#search').val().toUpperCase()) > -1) {
          $(this).parent().css('display', '');
        } else if ($(this).find('.description').find('p').html().toUpperCase().indexOf($('#search').val().toUpperCase()) > -1) {
          $(this).parent().css('display', '');
        } else if ($(this).find('.category').html().toUpperCase().indexOf($('#search').val().toUpperCase()) > -1) {
          $(this).parent().css('display', '');
        } else {
          $(this).parent().css('display', 'none');
        }
      });
    }
  };
  // Search on key up
  $('#search').keyup( search() );

  $('.search-tag').click(function() {
    var current = $('#search').val();
    console.log(current);
    if(current != '') { current += ', '; }
    $('#search').val(current + $(this).data('tag'));

    // Search on tag click
    search()
  });

  /* Share Functions */
  $('.share-btn').click(function() {
    $('.share-over').toggleClass('active');
    $('.share-under').toggleClass('active');
  });

  $('#parse').click(function() {
    $.get("md-parser.php?", function( data ) {
      console.log(JSON.parse(data));
    });
  });

})(jQuery); // End of use strict
