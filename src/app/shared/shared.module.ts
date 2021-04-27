import { NgModule } from '@angular/core';
import { ScaleSizePipe } from './pipes/scale-size.pipe';

@NgModule({
  declarations: [ScaleSizePipe],
  imports: [],
  exports: [ScaleSizePipe]
})
export class SharedModule {}
