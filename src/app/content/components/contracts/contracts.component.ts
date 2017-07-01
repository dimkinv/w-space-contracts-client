import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { Character } from 'app/welcome/character/models/character.model';

@Component({
    selector: 'wsc-contracts',
    templateUrl: './contracts.component.html',
    styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
    public currentCharacterData: Character = new Character();
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.currentCharacterData = this.authService.currentCharacterData;
    }

}
