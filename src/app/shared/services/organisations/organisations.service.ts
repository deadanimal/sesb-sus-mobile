import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Organisation } from './organisation.model'

@Injectable({
  providedIn: 'root'
})
export class OrganisationsService {

   // URL
   public urlOrganisations: string = environment.baseUrl + 'v1/organisations/'

   // Data
   public organisation: Organisation
   public organisations: Organisation[] = []
   public organisationsFiltered: Organisation[] = []
 
   constructor(
     private http: HttpClient
   ) { }
 
   create(body: Form): Observable<any> {
     return this.http.post<any>(this.urlOrganisations, body).pipe(
       tap((res) => {
         this.organisation = res
         console.log('Created: ', this.organisation)
       })
     )
   }
   
   getAll(): Observable<Organisation[]> {
     return this.http.get<Organisation[]>(this.urlOrganisations).pipe(
       tap((res: Organisation[]) => {
         this.organisations = res
         console.log('Organisations: ', this.organisations)
       })
     )
   }
 
   getOne(id: string): Observable<Organisation> {
     let urlID = this.urlOrganisations + id + '/'
     return this.http.get<Organisation>(urlID).pipe(
       tap((res: Organisation) => {
         this.organisation = res
         console.log('Organisation: ', this.organisation)
       })
     )
   }
 
   update(id: string, body: Form): Observable<Organisation> {
     let urlID = this.urlOrganisations + id + '/'
     return this.http.put<Organisation>(urlID, body).pipe(
       tap((res: Organisation) => {
         this.organisation = res
         console.log('Updated: ', this.organisation)
       })
     )
   }
 
   delete(id: string): Observable<any> {
     let urlID = this.urlOrganisations + id + '/'
     return this.http.get<any>(urlID).pipe(
       tap((res: any) => {
         console.log('Deleted: ', res)
       })
     )
   }
 
   filter(filters: string): Observable<Organisation[]> {
     let urlFilter = this.urlOrganisations + '?' + filters
     return this.http.get<Organisation[]>(urlFilter).pipe(
       tap((res: Organisation[]) => {
         this.organisationsFiltered = res
         console.log('Filtered: ', this.organisationsFiltered)
       })
     )
   }

}
