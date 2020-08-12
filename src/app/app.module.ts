import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/components/home/home.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { NavigationComponent } from '../app/components/navigation/navigation.component';
import { NotFoundComponent } from '../app/components/not-found/not-found.component';
import { SharedModule } from "./shared/shared.module";
import { ProductsModule } from './products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientModule } from './clients/client.module';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { OrderListComponent } from './orders/order-list/order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavigationComponent,
    NotFoundComponent,
    FooterComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    ClientModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
