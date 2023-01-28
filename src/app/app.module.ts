import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { share } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsModule } from './products/products.module';
import { CarouselComponent } from './products/components/carousel/carousel.component';
import { CartsModule } from './carts/carts.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    // CartsModule
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
