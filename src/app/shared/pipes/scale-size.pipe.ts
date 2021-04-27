import { Pipe, PipeTransform } from '@angular/core';
import { Album } from '../models/album';

@Pipe({
  name: 'scaleSize',
})
export class ScaleSizePipe implements PipeTransform {
  transform(albums: Album[] | null, size: number): Album[] {
    return albums ? albums.slice(0, size) : [];
  }
}
