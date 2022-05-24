import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { filter } from 'lodash';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  public links: Route[];

  constructor(
    private router: Router
  ) { 
    this.links = filter(this.router.config, 'data.label');
  }

  ngOnInit(): void {
  }

}
