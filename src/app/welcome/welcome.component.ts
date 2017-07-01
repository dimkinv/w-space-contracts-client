import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { AuthService } from '../services/auth/auth.service'
import { Character } from './character/models/character.model';

@Component({
    selector: 'wsc-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
    public ssoAuthorizationUri = 'https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=';
    public characters: Character[] = [];

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
        console.info(`WelcomeComponent::ngOnInit: initializing session`);
        this.ssoAuthorizationUri += `${environment.ssoRedirectUri}&client_id=${environment.clientId}&scope=publicData`;
        const sessions = this.authService.getSessions();

        sessions.forEach(session => {
            this.processSession(session);
        });

        this.authService.onNewSessionReceived.subscribe((session) => {
            console.info(`WelcomeComponent::onNewSessionReceived:: callback from session service with session ${session}, adding manually`);
            this.processSession(session);
        });
    }

    onCharacterClick(character: Character) {
        this.authService.currentCharacterData = character;
        this.router.navigate(['/content/contracts']);
    }

    private processSession(session: string) {
        const char = new Character();
        char.sessionId = session;

        this.characters.push(char);
        console.info(`WelcomeComponent::processSession: requesting affiliation for session ${session}`);
        this.authService.getAffiliationForSession(session)
            .then(affiliation => {
                console.info(`WelcomeComponent::processSession: affiliation request success for character: ${affiliation.character_id}`);
                const chToUpdate = this.characters.find(ch => ch.sessionId === session);
                chToUpdate.allianceId = affiliation.alliance_id;
                chToUpdate.corporationId = affiliation.corporation_id;
                chToUpdate.characterId = affiliation.character_id;
            })
            .catch(err => {
                console.error(`WelcomeComponent::processSession:: error requesting affiliation: ${err}`);
                console.warn('TODO: Display error message and add remove character window from screen');
                // TODO: Display error message and add remove character window from screen
            });
    }

}
