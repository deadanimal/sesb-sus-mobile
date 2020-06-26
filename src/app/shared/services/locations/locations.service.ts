import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  // URL
  public urlLocations: string = environment.baseUrl + 'v1/locations/'

  // Data
  public location: Location
  public locations: Location[] = []
  public locationsFiltered: Location[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form): Observable<any> {
    return this.http.post<any>(this.urlLocations, body).pipe(
      tap((res) => {
        this.location = res
        console.log('Created: ', this.location)
      })
    )
  }
  
  getAll(): Observable<Location[]> {
    return this.http.get<Location[]>(this.urlLocations).pipe(
      tap((res: Location[]) => {
        this.locations = res
        console.log('Locations: ', this.locations)
      })
    )
  }

  getOne(id: string): Observable<Location> {
    let urlID = this.urlLocations + id + '/'
    return this.http.get<Location>(urlID).pipe(
      tap((res: Location) => {
        this.location = res
        console.log('Location: ', this.location)
      })
    )
  }

  update(id: string, body: Form): Observable<Location> {
    let urlID = this.urlLocations + id + '/'
    return this.http.put<Location>(urlID, body).pipe(
      tap((res: Location) => {
        this.location = res
        console.log('Updated: ', this.location)
      })
    )
  }

  delete(id: string): Observable<any> {
    let urlID = this.urlLocations + id + '/'
    return this.http.get<any>(urlID).pipe(
      tap((res: any) => {
        console.log('Deleted: ', res)
      })
    )
  }

  filter(filters: string): Observable<Location[]> {
    let urlFilter = this.urlLocations + '?' + filters
    return this.http.get<Location[]>(urlFilter).pipe(
      tap((res: Location[]) => {
        this.locationsFiltered = res
        console.log('Filtered: ', this.locationsFiltered)
      })
    )
  }

}
