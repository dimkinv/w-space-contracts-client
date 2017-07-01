import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCorporationImage'
})
export class ToCorporationImagePipe implements PipeTransform {

  transform(corporationId: number): any {
    return `url('https://imageserver.eveonline.com/Corporation/${corporationId}_64.png')`;
  }

}
