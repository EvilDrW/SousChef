import { Injectable } from '@angular/core';
import { Unit } from './unit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) { }

  private loadUnitDatabase(): Observable<Unit[]> {
    return this.http.get<Unit[]>('./assets/units.json');
  }

  getUnit(id: string): Observable<Unit> {
    return this.loadUnitDatabase().pipe(
      map((data) => {
        let outputData: Unit[] = data.filter((r) => {
          return r.id == id;
        });

        if (outputData.length == 1) {
          return outputData[0];
        }

        return null;
      })
    );
  }

  getAll(): Observable<Unit[]> {
    return this.loadUnitDatabase();
  }
}
