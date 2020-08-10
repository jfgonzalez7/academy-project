import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { NotFoundComponent } from '../app/components/not-found/not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientAddComponent } from './clients/client-add/client-add.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/add', component: ClientAddComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
