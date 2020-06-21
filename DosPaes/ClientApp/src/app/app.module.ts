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
import { EditCategoriaComponent } from "./categoria/edit-categoria/edit-categoria.component";
import { DeleteCategoriaComponent } from "./categoria/delete-categoria/delete-categoria.component";
import { CrudHeadComponent } from "./commun/crud-head/crud-head.component";
import { LoadComponent } from "./load/load.component";
import { ListCustoComponent } from "./custo/list-custo/list-custo.component";
import { AddCustoComponent } from "./custo/add-custo/add-custo.component";
import { EditCustoComponent } from "./custo/edit-custo/edit-custo.component";
import { DeleteCustoComponent } from "./custo/delete-custo/delete-custo.component";
import { ListVendaComponent } from "./venda/list-venda/list-venda.component";
import { AddVendaComponent } from "./venda/add-venda/add-venda.component";
import { EditVendaComponent } from "./venda/edit-venda/edit-venda.component";
import { DeleteVendaComponent } from "./venda/delete-venda/delete-venda.component";

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
      { path: "editCategoria/:id", component: EditCategoriaComponent },
      { path: "deleteCategoria/:id", component: DeleteCategoriaComponent },
      { path: "categoria", component: ListCategoriaComponent },
      { path: "custo", component: ListCustoComponent },
      { path: "addCusto", component: AddCustoComponent },
      { path: "editCusto/:id", component: EditCustoComponent },
      { path: "deleteCusto/:id", component: DeleteCustoComponent },
      { path: "venda", component: ListVendaComponent },
      { path: "addVenda", component: AddVendaComponent },
      { path: "editVenda/:id", component: EditVendaComponent },
      { path: "deleteVenda/:id", component: DeleteVendaComponent },
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
    CrudHeadComponent,
    EditCategoriaComponent,
    DeleteCategoriaComponent,
    LoadComponent,
    ListCustoComponent,
    AddCustoComponent,
    DeleteCustoComponent,
    EditCustoComponent,
    ListVendaComponent,
    AddVendaComponent,
    EditVendaComponent,
    DeleteVendaComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    NgxCurrencyModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
