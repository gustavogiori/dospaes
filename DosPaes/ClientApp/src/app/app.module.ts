import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxCurrencyModule } from "ngx-currency";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { AddProdutoComponent } from "./components/produto/add-produto/add-produto.component";
import { ListProdutoComponent } from "./components/produto/list-produto/list-produto.component";
import { ListComponent } from "./components/commun/list/list.component";
import { EditProdutoComponent } from "./components/produto/edit-produto/edit-produto.component";
import { DeleteProdutoComponent } from "./components/produto/delete-produto/delete-produto.component";
import { AddCategoriaComponent } from "./components/categoria/add-categoria/add-categoria.component";
import { ListCategoriaComponent } from "./components/categoria/list-categoria/list-categoria.component";
import { EditCategoriaComponent } from "./components/categoria/edit-categoria/edit-categoria.component";
import { DeleteCategoriaComponent } from "./components/categoria/delete-categoria/delete-categoria.component";
import { CrudHeadComponent } from "./components/commun/crud-head/crud-head.component";
import { LoadComponent } from "./components/load/load.component";
import { ListCustoComponent } from "./components/custo/list-custo/list-custo.component";
import { AddCustoComponent } from "./components/custo/add-custo/add-custo.component";
import { EditCustoComponent } from "./components/custo/edit-custo/edit-custo.component";
import { DeleteCustoComponent } from "./components/custo/delete-custo/delete-custo.component";
import { ListVendaComponent } from "./components/venda/list-venda/list-venda.component";
import { AddVendaComponent } from "./components/venda/add-venda/add-venda.component";
import { EditVendaComponent } from "./components/venda/edit-venda/edit-venda.component";
import { DeleteVendaComponent } from "./components/venda/delete-venda/delete-venda.component";
import {ListClienteComponent} from "./components/cliente/list-cliente/list-cliente.component";
import { AddClienteComponent } from "./components/cliente/add-cliente/add-cliente.component";
import { EditClienteComponent } from "./components/cliente/edit-cliente/edit-cliente.component";
import { DeleteClienteComponent } from "./components/cliente/delete-cliente/delete-cliente.component";
import { FormClienteComponent } from "./components/cliente/form-cliente/form-cliente.component";
import { BoardVendasComponent } from "./components/board-vendas/board-vendas.component";


  import { from } from "rxjs";
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
      { path: "cliente", component: ListClienteComponent },
      { path: "addCliente", component: AddClienteComponent },
      { path: "editCliente/:id", component: EditClienteComponent },
      { path: "deleteCliente/:id", component: DeleteClienteComponent },
      { path: "boardVendas", component: BoardVendasComponent },
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
    DeleteVendaComponent,
    ListClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    DeleteClienteComponent,
    FormClienteComponent,
    BoardVendasComponent
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
