import 'rxjs/add/observable/of';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CCPService, ObservableType } from 'app/services/ccp/search.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReactiveContractService } from '../../../services/reactive-factories/reactive-contract/reactive-contract.service';

@Component({
    selector: 'wsc-new-contract',
    templateUrl: './edit-contract.component.html',
    styleUrls: ['./edit-contract.component.scss']
})
export class EditContractComponent implements OnInit {
    async ngOnInit() {
        const id = (await this.route.params.toPromise())['id'];
        if (this.route.params['id'] === 'new') {
            this.initializeFormForNew();
            return;
        }

        this.initializeFormForUpdate();
    }

    searchObservable: (keyword: any) => Observable<any[]>;
    contractForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private ccpService: CCPService,
                private contractFactory: ReactiveContractService) {

        this.searchObservable = ccpService.getESIFunction(ObservableType.SEARCH);
    }

    private initializeFormForUpdate() {
        throw new Error('not implemented');
    }

    private initializeFormForNew() {
        this.contractForm = this.contractFactory.getReactiveInstance();
    }
}
