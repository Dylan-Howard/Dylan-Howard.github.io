import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Dylan Howard';

  ngOnInit() {
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

    $('.nav-open-btn').click(function() {
      $('.nav-t').toggleClass('show');
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.nav-t').removeClass('show');
      $('.nav-open').prop('checked', false);
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      var ceiling;
      if($('.masthead').length) { ceiling = ($(window).height()*2 - 30); }
      else { ceiling = ($(window).height()*.2); }

      if($("#mainNav").offset().top > ceiling) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };

    // Blur Header Effect
    var blurHeader = function() {
      if($('.head__bg').length) {
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
      }
    };

    /* Scroll Animations */
    setInterval(function() { blurHeader(); navbarCollapse(); }, 100);
  }
}
