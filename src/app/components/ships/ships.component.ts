import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Search } from 'src/app/_core/interfaces/search.interface';
import { Ship } from 'src/app/_core/interfaces/ship.interface';
import { SwapiService } from 'src/app/_core/services/swapi.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit, OnDestroy {
  public ships: Ship[] = [];
  public selectedShip: Ship;
  public manufacturers: string[];
  public nextPage: string;
  public lastPage: string;
  public selectedIdx: number;

  private end$: Subject<any> = new Subject();

  constructor(
    private swapiService: SwapiService
  ) { 
    this.getShips('1');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.end$.complete();
    this.end$.next(1);
  }

  filterByManufacturer(manufacturer: string) {
    const pageNum = (parseInt(this.nextPage.slice(-1)) - 1).toString();
    this.swapiService.getSpaceShips(manufacturer, pageNum)
    .pipe(takeUntil(this.end$))
    .subscribe(res => {
      if(res) {
        this.ships = res.results;
      }
    });
  }

  onNextPageClick(): void {
    const pageNum = this.nextPage.slice(-1);
    this.getShips(pageNum);
  }

  onLastPageClick(): void {
    const pageNum = this.lastPage.slice(-1);
    this.getShips(pageNum);
  }

  getShips(pageNum: string): void {
    this.swapiService.getSpaceShips('', pageNum)
    .pipe(takeUntil(this.end$))
    .subscribe(res => {
      if(res) {
        this.ships = res.results;
        this.manufacturers = this.ships.map(ship => ship.model);

        this.nextPage = res.next;

        this.lastPage = res.previous;
      }
    });
  }

  onShipSelect(ship: Ship, idx: number) {
    this.selectedShip = ship;
    this.selectedIdx = idx;
  }

}
