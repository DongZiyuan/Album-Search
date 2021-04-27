import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Album } from '../shared/models/album';
import { Query } from '../shared/models/query';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly _loggedIn = new BehaviorSubject<boolean>(true);
  readonly loggedIn$ = this._loggedIn.asObservable();
  get loggedIn(): boolean {
    return this._loggedIn.getValue();
  }
  set loggedIn(flag: boolean) {
    this._loggedIn.next(flag);
  }

  private readonly _query = new BehaviorSubject<Query>({ artist: '', entity: '', price: 0 });
  readonly query$ = this._query.asObservable();
  get query(): Query {
    return this._query.getValue();
  }
  set query(query: Query) {
    this._query.next(query);
  }

  private readonly _albums = new BehaviorSubject<Album[]>([]);
  readonly albums$ = this._albums.asObservable();
  get albums(): Album[] {
    return this._albums.getValue();
  }
  set albums(albums: Album[]) {
    this._albums.next(albums);
  }

  constructor() {}
}
