import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Divine Joy';
  description = 'The greatest satisfaction any human can experience is to enjoy God. Divine Joy exists to help.';
  email = 'dylan@divinejoy.com';

  ngOnInit() {
    var navbarLinksToggle = function() {
      if($(window).width() > 992) { return; }
      var time = 100;

      console.log('Initializing');

      $('.nav-link').each(function() {
        var l = $(this);
        setTimeout(function() {
          l.toggleClass('show');
        }, time);
        time += 100;
      });
    };

    $('.navbar-toggler').click(function() {
      navbarLinksToggle();
    });

    $('.nav-item').click(function() {
      $('.navbar-collapse').collapse('hide');
      navbarLinksToggle();
    });

    $('.navbar-brand').click(function() {
      $('.navbar-collapse').collapse('hide');
      navbarLinksToggle();
    });

  }
}
