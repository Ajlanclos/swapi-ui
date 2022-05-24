import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Search } from '../interfaces/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private http: HttpClient
  ) { }

  getSpaceShips(search: string = '', pageNum: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/starships/?page=${pageNum}&search=${search}`)
      .pipe(map(res => res));
  }
}
