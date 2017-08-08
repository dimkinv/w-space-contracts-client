import { Routes } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { ContractsComponent } from 'app/content/pages/contracts/contracts.component';
import { EditContractComponent } from 'app/content/pages/edit-contract/edit-contract.component';
import { ContentComponent } from 'app/content/content.component';
import { ContractComponent } from './content/pages/contract/contract.component';

export const wscRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: WelcomeComponent
    },
    {
        path: 'content',
        component: ContentComponent,
        children: [
            {
                path: 'contracts',
                component: ContractsComponent
            },
            {
                path: 'contract/:id',
                component: ContractComponent
            },
            {
                path: 'edit-contract/:id',
                component: EditContractComponent
            }
        ]
    },
];
