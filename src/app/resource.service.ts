import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Resource } from './resource';
import { RESOURCES } from './mock-list';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor() {}

  getResources(): Observable<Resource[]> {
    return of(RESOURCES);
  }

  getResource(link: string): Observable<Resource> {
    return of(RESOURCES.find(resource => resource.link === link));
  }

}
