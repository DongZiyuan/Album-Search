import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { QueryFormComponent } from './components/query-form/query-form.component';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlbumsEffects } from './store/app.effect';

@NgModule({
  declarations: [AppComponent, QueryFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    StoreModule.forRoot({ app: AppReducer }),
    EffectsModule.forRoot([AlbumsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
