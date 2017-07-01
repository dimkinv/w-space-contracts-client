import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toAllianceImage'
})
export class ToAllianceImagePipe implements PipeTransform {

    transform(allianceId: number): any {
        return `url('https://imageserver.eveonline.com/Alliance/${allianceId}_64.png')`;
    }

}
