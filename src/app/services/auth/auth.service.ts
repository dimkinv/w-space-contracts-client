import 'rxjs/add/operator/toPromise';
import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AffiliationResponse } from 'app/services/auth/models/affiliation-reponse.model';
import { Character } from 'app/welcome/character/models/character.model';

@Injectable()
export class AuthService {

    public onNewSessionReceived = new EventEmitter();
    public currentCharacterData: Character;

    constructor(private activatedRoute: ActivatedRoute, private http: Http) { }

    private async authenticateUserWithCode(code: string) {
        try {
            const res = await this.http.get(environment.endpoints.authenticateWithCode.replace('{code}', code)).toPromise();
            return res.json();
        } catch (ex) {
            console.error(`AuthService::authenticateUserWithCode:: error authenticating code: ${ex}`);
            throw ex;
        }
    }

    async getAffiliationForSession(session: string): Promise<AffiliationResponse> {
        try {
            const res = await this.http.get(environment.endpoints.getAffiliation.replace('{session}', session)).toPromise();
            return res.json();
        } catch (ex) {
            console.error(`AuthService::getAffiliationForSession:: error get affiliation: ${ex}`);
            throw ex;
        }
    }

    async initQueryListener() {
        this.activatedRoute.queryParams.subscribe(async (params) => {
            const code = params['code'];
            if (!code) {
                return;
            }

            console.info(`AppComponent::ngOnInit:: code found ${code}, initiating authentication`);
            const sessionData = await this.authenticateUserWithCode(code);
            this.addSessionToLocalStorage(sessionData.session_id);

            this.onNewSessionReceived.emit(sessionData.session_id);
        });
    };

    private addSessionToLocalStorage(sessionId) {
        const sessions = this.getSessions();

        sessions.push(sessionId);
        localStorage.setItem('sessions', JSON.stringify(sessions));
    }

    getSessions() {
        let sessions: string[];
        if (!localStorage.getItem('sessions')) {
            sessions = [];
        } else {
            sessions = JSON.parse(localStorage.getItem('sessions'));
        }

        return sessions;
    }
}
