import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QueryFormComponent } from './components/query-form/query-form.component';
import { AuthGuardService } from './services/auth-guard.service';
import { DeactivateGuard } from './services/can-deactive-guard.service';

const routes: Routes = [
  {
    path: '',
    component: QueryFormComponent,
    canDeactivate: [DeactivateGuard],
    pathMatch: 'full',
  },
  {
    path: 'albumlist',
    loadChildren: () =>
      import('./album-list/album-list.module').then((m) => m.AlbumListModule),
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
