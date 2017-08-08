import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { Character } from 'app/welcome/character/models/character.model';
import { ApiService } from '../../../services/api/api.service';
import { Contract } from '../../../models/contract.model';

@Component({
    selector: 'wsc-contracts',
    templateUrl: './contracts.component.html',
    styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
    public currentCharacterData: Character = new Character();
    public contracts: Contract[];

    constructor(private authService: AuthService, private router: Router, private api: ApiService) {
    }

    async ngOnInit() {
        this.currentCharacterData = this.authService.currentCharacterData;

        try {
            this.contracts = await this.api.getContracts()
        } catch (ex) {
            console.error(`ContractsComponent::ngOnInit:: error requesting contracts, ${ex} `);
        }
    }

}
