import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

    transform(number: any, args?: any): any {
        const SI_POSTFIXES = ['', 'k', 'M', 'B', 'T', 'P', 'E'];
        const tier = Math.log10(Math.abs(number)) / 3 | 0;
        if (tier === 0) {
            return number;
        }
        const postfix = SI_POSTFIXES[tier];
        const scale = Math.pow(10, tier * 3);
        const scaled = number / scale;
        let formatted = scaled.toFixed(1) + '';
        if (/\.0$/.test(formatted)) {
            formatted = formatted.substr(0, formatted.length - 2);
        }
        return formatted + postfix + ' ISK';
    }

}
