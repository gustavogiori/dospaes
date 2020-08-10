import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
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
import { ListClienteComponent } from "./components/cliente/list-cliente/list-cliente.component";
import { AddClienteComponent } from "./components/cliente/add-cliente/add-cliente.component";
import { EditClienteComponent } from "./components/cliente/edit-cliente/edit-cliente.component";
import { DeleteClienteComponent } from "./components/cliente/delete-cliente/delete-cliente.component";
import { FormClienteComponent } from "./components/cliente/form-cliente/form-cliente.component";
import { BoardVendasComponent } from "./components/board-vendas/board-vendas.component";
import { ProducaoComponent } from "./components/producao/producao.component";
import { AddModalClienteComponent } from "./components/cliente/add-modal-cliente/add-modal-cliente.component";
import { ModalComponent } from "./components/commun/modal/modal/modal.component";
import { AddModalProdutoComponent } from "./components/produto/add-modal-produto/add-modal-produto.component";
import { ListUsuarioComponent } from "./components/usuario/list-usuario/list-usuario.component";
import { AddUsuarioComponent } from "./components/usuario/add-usuario/add-usuario.component";
import { from } from "rxjs";
import { AuthGuard } from "./components/guards/auth.guard";
import { HttpInterceptorService } from "./service/http-interceptor.service";
import { ErrorInterceptorService } from "./service/error-interceptor.service";
import { UserMenuComponent } from "./components/user-menu/user-menu.component";
import { ItensVendaComponent } from "../app/components/venda/itens-venda/itens-venda.component";

const appRoutes: Routes = [
  {
    path: "dashboard",
    component: HeaderComponent,
    children: [
      { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
      {
        path: "produto",
        component: ListProdutoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "addProduto",
        component: AddProdutoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "editProduto/:id",
        component: EditProdutoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "deleteProduto/:id",
        component: DeleteProdutoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "addCategoria",
        component: AddCategoriaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "editCategoria/:id",
        component: EditCategoriaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "deleteCategoria/:id",
        component: DeleteCategoriaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "categoria",
        component: ListCategoriaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "custo",
        component: ListCustoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "addCusto",
        component: AddCustoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "editCusto/:id",
        component: EditCustoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "deleteCusto/:id",
        component: DeleteCustoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "venda",
        component: ListVendaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "addVenda",
        component: AddVendaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "editVenda/:id",
        component: EditVendaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "deleteVenda/:id",
        component: DeleteVendaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "cliente",
        component: ListClienteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "addCliente",
        component: AddClienteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "editCliente/:id",
        component: EditClienteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "deleteCliente/:id",
        component: DeleteClienteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "boardVendas",
        component: BoardVendasComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "producao",
        component: ProducaoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "usuario",
        component: ListUsuarioComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "addUsuario",
        component: AddUsuarioComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: "login", component: LoginComponent },
  { path: "addUsuario", component: AddUsuarioComponent },
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
    BoardVendasComponent,
    ProducaoComponent,
    AddModalClienteComponent,
    ModalComponent,
    AddModalProdutoComponent,
    ListUsuarioComponent,
    AddUsuarioComponent,
    UserMenuComponent,
    ItensVendaComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    NgxCurrencyModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
