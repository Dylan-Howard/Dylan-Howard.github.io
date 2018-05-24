import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as $ from 'jquery';

import { Resource } from '../resource';
import { ResourceService }  from '../resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  @Input() resource: Resource;
  content: string;

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getResource();

    $(window).scrollTop(0);
  }

  getResource(): void {
    const link = this.route.snapshot.paramMap.get('link');
    this.resourceService.getResource(link)
      .subscribe(resource => this.resource = resource);
  }

}
