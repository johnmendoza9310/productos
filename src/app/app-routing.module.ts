import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { ProductsComponent } from "./components/products/products.component";
import { LoginGuard } from "./guards/login.guard";


const routes: Routes = [

  { path: 'login', component: LoginComponent, canActivate:[LoginGuard]},
  { path: 'products', component: ProductsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
