import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Contract, Item } from "../../../models/contract.model";

@Injectable()
export class ReactiveContractService {

    constructor(private formBuilder: FormBuilder) {
    }

    getReactiveInstance(contract?: Contract): FormGroup {
        const reactiveContract = this.formBuilder.group({
            started_at: [null],
            contract_length: [null],
            from_id: [null],
            from_name: [null],
            to_id: [null],
            to_name: [null],
            privacy: [null],
            type: [null],
            from_system_id: [null],
            to_system_id: [null],
            from_system_name: [null],
            to_system_name: [null],
            total_price: [null],
            items: []
        });

        if (contract) {
            reactiveContract.setValue(contract);
        }

        return reactiveContract
    }

    getReactiveItemInstance(item?: Item) {
        const reactiveItem = this.formBuilder.group({
            id: [null],
            name: [null],
            amount: [null]
        });

        if (item) {
            reactiveItem.setValue(item);
        }

        return reactiveItem;
    }

}
