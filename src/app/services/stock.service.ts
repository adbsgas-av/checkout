import { Injectable } from '@angular/core';
import { IItem } from '../model/IItem';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private _http: HttpClient) { }

  public getItems(): Observable<IItem[]> {
    return this._http.get<IItem[]>('../assets/stock.json');
  }
}
