import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
// import { RESOURCES } from '../mock-list';
import { ProjectService } from '../project.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private ProjectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();

    // prj-card-reveal
    var prjCardReveal = function() {
      if($('.project-card').length) {
        $('.project-card').each(function() {
          if($(this).offset().top - ($(window).height()*.8) < $(window).scrollTop() ) {
            $(this).addClass('show');
          }
        })
      }
    };

    /* Scroll Animations */
    setInterval(function() { prjCardReveal(); }, 100);
  }

  projects: Project[];

  getProjects(): void {
    this.ProjectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

}
