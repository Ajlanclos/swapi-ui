import { Component, Input, OnInit } from '@angular/core';
import { Ship } from 'src/app/_core/interfaces/ship.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input('details') details: Ship;

  constructor() { }

  ngOnInit(): void {
  }

}
