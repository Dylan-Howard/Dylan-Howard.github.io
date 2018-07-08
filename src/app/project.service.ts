import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Project } from './project';
import { PROJECTS } from './mock-list';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  PROJECTS = PROJECTS.reverse();

  constructor() {}

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProject(title: string): Observable<Project> {
    return of(PROJECTS.find(project => project.title === title));
  }
}
