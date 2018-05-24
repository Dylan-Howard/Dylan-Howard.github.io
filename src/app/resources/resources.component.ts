import { Component, OnInit } from '@angular/core';
import { Resource } from '../resource';
// import { RESOURCES } from '../mock-list';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.getResources();
  }

  resources: Resource[];

  getResources(): void {
    this.resourceService.getResources()
      .subscribe(resources => this.resources = resources);
  }

}
