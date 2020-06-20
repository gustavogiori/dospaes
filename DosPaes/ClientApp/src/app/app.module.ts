import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxCurrencyModule } from "ngx-currency"; 

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { AddProdutoComponent } from "./produto/add-produto/add-produto.component";
import { ListProdutoComponent } from "./produto/list-produto/list-produto.component";
import { ListComponent } from "./commun/list/list.component";
import { EditProdutoComponent } from "./produto/edit-produto/edit-produto.component";
import { DeleteProdutoComponent } from "./produto/delete-produto/delete-produto.component";
import { AddCategoriaComponent } from "./categoria/add-categoria/add-categoria.component";
import { ListCategoriaComponent } from "./categoria/list-categoria/list-categoria.component";
import { CrudHeadComponent } from "./commun/crud-head/crud-head.component";
const appRoutes: Routes = [
  {
    path: "dashboard",
    component: HeaderComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "produto", component: ListProdutoComponent },
      { path: "addProduto", component: AddProdutoComponent },
      { path: "editProduto/:id", component: EditProdutoComponent },
      { path: "deleteProduto/:id", component: DeleteProdutoComponent },
      { path: "addCategoria", component: AddCategoriaComponent },
      { path: "categoria", component: ListCategoriaComponent },
    ],
  },
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    AddProdutoComponent,
    ListProdutoComponent,
    ListComponent,
    EditProdutoComponent,
    DeleteProdutoComponent,
    AddCategoriaComponent,
    ListCategoriaComponent,
    CrudHeadComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    NgxCurrencyModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
