import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  // URL
  public urlAccounts: string = environment.baseUrl + 'v1/accounts/'

  // Data
  public account: Account
  public accounts: Account[] = []
  public accountsFiltered: Account[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form): Observable<any> {
    return this.http.post<any>(this.urlAccounts, body).pipe(
      tap((res) => {
        this.account = res
        console.log('Created: ', this.account)
      })
    )
  }
  
  getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.urlAccounts).pipe(
      tap((res: Account[]) => {
        this.accounts = res
        console.log('Accounts: ', this.accounts)
      })
    )
  }

  getOne(id: string): Observable<Account> {
    let urlID = this.urlAccounts + id + '/'
    return this.http.get<Account>(urlID).pipe(
      tap((res: Account) => {
        this.account = res
        console.log('Account: ', this.account)
      })
    )
  }

  update(id: string, body: Form): Observable<Account> {
    let urlID = this.urlAccounts + id + '/'
    return this.http.put<Account>(urlID, body).pipe(
      tap((res: Account) => {
        this.account = res
        console.log('Updated: ', this.account)
      })
    )
  }

  delete(id: string): Observable<any> {
    let urlID = this.urlAccounts + id + '/'
    return this.http.get<any>(urlID).pipe(
      tap((res: any) => {
        console.log('Deleted: ', res)
      })
    )
  }

  filter(filters: string): Observable<Account[]> {
    let urlFilter = this.urlAccounts + '?' + filters
    return this.http.get<Account[]>(urlFilter).pipe(
      tap((res: Account[]) => {
        this.accountsFiltered = res
        console.log('Filtered: ', this.accountsFiltered)
      })
    )
  }

}
