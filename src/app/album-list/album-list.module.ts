import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListRoutingModule } from './album-list-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AlbumListComponent } from './album-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlbumListComponent],
  imports: [CommonModule, AlbumListRoutingModule, SharedModule, FormsModule],
})
export class AlbumListModule {}
