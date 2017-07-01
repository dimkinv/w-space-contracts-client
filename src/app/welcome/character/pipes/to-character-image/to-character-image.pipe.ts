import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toCharacterImage'
})
export class ToCharacterImagePipe implements PipeTransform {

    transform(characterId: string): any {
        return `url('https://image.eveonline.com/Character/${characterId}_256.jpg')`;
    }

}
