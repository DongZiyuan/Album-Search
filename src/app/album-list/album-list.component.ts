import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Album } from 'src/app/shared/models/album';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../services/http.service';
import { mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../store/app.selector';
import { setAlbums, setQueryArtist } from '../store/app.actions';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
  albums$!: Observable<Album[]>;
  albums: Album[] = [];
  pageSize = 500;
  myAlbums = this.store.select((state: State) => state.app.albums)

  constructor(
    private route: ActivatedRoute,
    private hs: HttpService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    console.log(this.myAlbums);
    const httpSub: Subscription = this.route.queryParams.subscribe(qp => {
      this.store.dispatch(setQueryArtist({ artist: qp['artist'] }));
    })
      // .pipe(
      //   mergeMap((qp: Params) => {
      //     this.store.dispatch(setQueryArtist({ artist: qp['artist'] }));
      //     return this.hs.getAlbums(qp['artist']);
      //   })
      // )
      // .subscribe(
      //   (albums: Album[]) => {
      //     this.store.dispatch(setAlbums({ albums: albums }));
      //     //@ts-ignore
      //     console.log('after dispatch', this.store.source._value);
      //   },
      //   (err) => console.log(err),
      //   () => httpSub.unsubscribe()
      // );
    this.albums$ = this.store.select((state: State) => {
      return Object.values(state.app.albums);
    });
  }

  vote(id: number, score: number): void {}
}
