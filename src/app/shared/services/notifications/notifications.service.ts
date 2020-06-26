import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Notification } from './notification.model'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  // URL
  public urlNotifications: string = environment.baseUrl + 'v1/notifications/'

  // Data
  public notification: Notification
  public notifications: Notification[] = []
  public notificationsFiltered: Notification[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form): Observable<any> {
    return this.http.post<any>(this.urlNotifications, body).pipe(
      tap((res) => {
        this.notification = res
        console.log('Created: ', this.notification)
      })
    )
  }
  
  getAll(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.urlNotifications).pipe(
      tap((res: Notification[]) => {
        this.notifications = res
        console.log('Notifications: ', this.notifications)
      })
    )
  }

  getOne(id: string): Observable<Notification> {
    let urlID = this.urlNotifications + id + '/'
    return this.http.get<Notification>(urlID).pipe(
      tap((res: Notification) => {
        this.notification = res
        console.log('Notification: ', this.notification)
      })
    )
  }

  update(id: string, body: Form): Observable<Notification> {
    let urlID = this.urlNotifications + id + '/'
    return this.http.put<Notification>(urlID, body).pipe(
      tap((res: Notification) => {
        this.notification = res
        console.log('Updated: ', this.notification)
      })
    )
  }

  delete(id: string): Observable<any> {
    let urlID = this.urlNotifications + id + '/'
    return this.http.get<any>(urlID).pipe(
      tap((res: any) => {
        console.log('Deleted: ', res)
      })
    )
  }

  filter(filters: string): Observable<Notification[]> {
    let urlFilter = this.urlNotifications + '?' + filters
    return this.http.get<Notification[]>(urlFilter).pipe(
      tap((res: Notification[]) => {
        this.notificationsFiltered = res
        console.log('Filtered: ', this.notificationsFiltered)
      })
    )
  }

}
