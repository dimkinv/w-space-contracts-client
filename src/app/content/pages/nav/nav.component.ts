import { Component, OnInit } from '@angular/core';
import { Character } from 'app/welcome/character/models/character.model';
import { AuthService } from 'app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'wsc-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    public currentCharacterData: Character = new Character();
    constructor(private authService: AuthService, private router: Router) {
        // if (!this.authService.currentCharacterData) {
        //     this.router.navigate(['/login']);
        //     return;
        // }

        // this.currentCharacterData = this.authService.currentCharacterData;
    }

    ngOnInit() {
    }

}
