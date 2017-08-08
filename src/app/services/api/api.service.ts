import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment'
import { Contract } from '../../models/contract.model';

@Injectable()
export class ApiService {

    constructor(private http: Http) {
    }

    async getContracts(): Promise<Contract[]> {
        return (await this.http.get(environment.endpoints.contracts).toPromise()).json();
    }

    async getContractById(id: string): Promise<Contract> {
        return (await this.http.get(`${environment.endpoints.contracts}/${id}`).toPromise()).json();
    }
}
