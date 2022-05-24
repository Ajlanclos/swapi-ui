import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Search } from 'src/app/_core/interfaces/search.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input('manufacturers') manufacturers: string[];
  @Output() mf = new EventEmitter<string>();

  public manufacturer: string;

  constructor(
  ) {
   }

  ngOnInit(): void {
  }

  onMfChange(manufacturer: string): void {
    this.mf.emit(manufacturer);
  }

}
