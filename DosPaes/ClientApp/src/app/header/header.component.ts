import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import * as $ from 'jquery';
// import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-header-component',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    public pageName = 'Job';
    constructor(public router: Router) {
    }

    redirectToHome() {
        this.router.navigateByUrl('dashboard/home');
    }
    redirectToProduto() {
        this.router.navigateByUrl('dashboard/produto');
    }
    redirectToCategoria() {
        this.router.navigateByUrl('dashboard/categoria');
    }
    logMeOut(){
        this.router.navigateByUrl('login');
    }

}
