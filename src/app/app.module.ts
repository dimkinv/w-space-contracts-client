import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from 'app/services/auth/auth.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { wscRoutes } from './wsc-routes';
import { CharacterComponent } from './welcome/character/character.component';
import { ToCharacterImagePipe } from './welcome/character/pipes/to-character-image/to-character-image.pipe';
import { ToAllianceImagePipe } from './welcome/character/pipes/to-alliance-image/to-alliance-image.pipe';
import { ToCorporationImagePipe } from './welcome/character/pipes/to-corporation-image/to-corporation-image.pipe';
import { ContractsComponent } from './content/components/contracts/contracts.component';
import { NewContractComponent } from './content/components/new-contract/new-contract.component';
import { NavComponent } from './content/components/nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FormTextComponent } from './bootstrap/form-text/form-text.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        CharacterComponent,
        ToCharacterImagePipe,
        ToAllianceImagePipe,
        ToCorporationImagePipe,
        ContractsComponent,
        NewContractComponent,
        NavComponent,
        ContentComponent,
        FormTextComponent
    ],
    imports: [
        RouterModule.forRoot(wscRoutes),
        BrowserModule,
        HttpModule
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
