import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
   selector: 'app-header-component',
   templateUrl: './home.component.html',
})
export class HomeComponent  {
   constructor(public router: Router) {
   }

   redirectToVendas() {
       this.router.navigateByUrl('dashboard/venda');
   }
   redirectToDespesas() {
      this.router.navigateByUrl('dashboard/custo');
  }
}