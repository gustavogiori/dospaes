import { Component, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-load-component',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './load.component.html',
    styleUrls: ['./load.component.css']
})
export class LoadComponent{
    onChange(){
    }
    @Input() loading=false;
    constructor() {
    }

}
