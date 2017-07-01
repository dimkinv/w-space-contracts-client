import { Routes } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { ContractsComponent } from 'app/content/components/contracts/contracts.component';
import { NewContractComponent } from 'app/content/components/new-contract/new-contract.component';
import { ContentComponent } from 'app/content/content.component';

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
                path: 'new-contract',
                component: NewContractComponent
            }
        ]
    },
]
