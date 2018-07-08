import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as $ from 'jquery';

import { Project } from '../project';
import { ProjectService }  from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;
  content: string;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getProject();

    $(window).scrollTop(0);

    // Collapse prjHeader
    var prjHeadCollapse = function() {
      if(! $('.masthead').length) {
        if ($("#mainNav").offset().top > 1) {
          $(".prj-head").addClass("prj-head-shrink");
        } else {
          $(".prj-head").removeClass("prj-head-shrink");
        }
      }
    };

    /* Scroll Animations */
    setInterval(function() {
      prjHeadCollapse();
    }, 100);
  }

  getProject(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.projectService.getProject(title)
      .subscribe(project => this.project = project);
  }

}
