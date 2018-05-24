import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.getResources();
  }

  description = 'The greatest satisfaction any human can experience is to enjoy God. Divine Joy exists to help.';
  resources: Resource[];

  getResources(): void {
    this.resourceService.getResources()
      .subscribe(resources => this.resources = resources);
  }

}
