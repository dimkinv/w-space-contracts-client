import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { CCPSearchResponse } from './models/ccp-search-reponse.model';

@Injectable()
export class CCPService {
    constructor(private http: Http) { }

    getESIFunction(type: ObservableType): (query: string) => Observable<any[]> {
        switch (type) {
            case ObservableType.SEARCH:
                return this.searchSystem;
        }
    }
    private searchSystem(query: string): Observable<any[]> {
        return this.http.get(environment.endpoints.ccpSearch.replace('{query}', query))
            .map(response => {
                const json = response.json() as CCPSearchResponse;
                return json.solarsystem || [];
            });
    }
}

export enum ObservableType {
    SEARCH
}
