import {Component, OnInit} from '@angular/core';
import {AuthService} from 'app/services/auth/auth.service';

@Component({
    selector: 'wsc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    async ngOnInit() {
        await this.authService.initQueryListener();
    }

    constructor(private authService: AuthService) {
    }
}
