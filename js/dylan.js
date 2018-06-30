(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if($('.masthead').length) {
      if ($("#mainNav").offset().top > ($(window).height()*2 - 30)) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  if(! $('.masthead').length) { $("#mainNav").addClass("navbar-shrink"); }

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.project-card', {
    container: $(this).parent(),
    distance: '0',
    duration: 0,
    reset: true,
    scale: 1,
    afterReveal: function (domEl) { $(domEl).addClass('show'); },
  }, 300);

  $('.nav-open-btn').click(function() {
    $('.nav-t').toggleClass('show');
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.nav-t').removeClass('show');
    $('.nav-open').prop('checked', false);
  });

  /* Scroll Animations */
  setInterval(function() {
    var top = $(document).scrollTop();
    var h = $(window).height();

    $('.head__bg').css({
      '-webkit-filter': 'blur('+top/25+'px)',
      '-moz-filter': 'blur('+top+'px)',
      '-ms-filter': 'blur('+top+'px)',
      '-o-filter': 'blur('+top+'px)',
      'filter': 'blur('+top/25+'px)',
      'opacity': (h*.8-top)/h
    });
    navbarCollapse();
  }, 100);

  /* Typing Animation */
  if ($('.greet').length > 0) {
    var typed = new Typed('.greet', {
      strings: ["Hello", "Hola", "Bonjour", "Ciao", "مرحب به", "Hello,"],
      startDelay: 200,
      showCursor: false,
      backSpeed: 20,
      typeSpeed: 40
    });
  }


})(jQuery); // End of use strict
