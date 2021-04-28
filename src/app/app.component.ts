import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setQueryArtist } from './store/app.actions';
import { State } from './store/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputValue = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.app.query.artist)
      .subscribe((artist) => {});
  }

  onEnter(): void {
    //@ts-ignore
    console.log('before dispatch action',this.store.source._value);
    this.store.dispatch(setQueryArtist({ artist: this.inputValue }));
    this.router.navigate(['albumlist'], {
      relativeTo: this.route,
      queryParams: { artist: this.inputValue },
    });
  }
}
