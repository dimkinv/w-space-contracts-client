import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'app/welcome/character/models/character.model';

@Component({
    selector: 'wsc-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
    @Input() character = new Character();
    constructor() { }

    ngOnInit() {
    }

}
