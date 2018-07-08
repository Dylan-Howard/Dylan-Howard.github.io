import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  // description = 'The greatest satisfaction any human can experience is to enjoy God. Divine Joy exists to help.';
  projects: Project[];

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

}
