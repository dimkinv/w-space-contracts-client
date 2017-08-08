import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import { AppComponent } from './app.component';
import { AuthService } from 'app/services/auth/auth.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { wscRoutes } from './wsc-routes';
import { CharacterComponent } from './welcome/character/character.component';
import { ToCharacterImagePipe } from './welcome/character/pipes/to-character-image/to-character-image.pipe';
import { ToAllianceImagePipe } from './welcome/character/pipes/to-alliance-image/to-alliance-image.pipe';
import { ToCorporationImagePipe } from './welcome/character/pipes/to-corporation-image/to-corporation-image.pipe';
import { ContractsComponent } from './content/pages/contracts/contracts.component';
import { EditContractComponent } from './content/pages/edit-contract/edit-contract.component';
import { NavComponent } from './content/pages/nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FormTextComponent } from './bootstrap/form-text/form-text.component';
import { CCPService } from 'app/services/ccp/search.service';
import { ApiService } from './services/api/api.service';
import { CurrencyPipe } from './pipes/currency.pipe';
import { ReactiveContractService } from './services/reactive-factories/reactive-contract/reactive-contract.service';
import { ContractComponent } from './content/pages/contract/contract.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        CharacterComponent,
        ToCharacterImagePipe,
        ToAllianceImagePipe,
        ToCorporationImagePipe,
        ContractsComponent,
        EditContractComponent,
        NavComponent,
        ContentComponent,
        FormTextComponent,
        CurrencyPipe,
        ContractComponent
    ],
    imports: [
        RouterModule.forRoot(wscRoutes),
        ReactiveFormsModule,
        BrowserModule,
        HttpModule,
        NguiAutoCompleteModule
    ],
    providers: [
        AuthService,
        ApiService,
        CCPService,
        ReactiveContractService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
