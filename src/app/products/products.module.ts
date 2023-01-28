import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AllProductsComponent,
        ProductsDetailsComponent,
        CarouselComponent,
        ProductComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        SharedModule,
        FormsModule
    ]
})
export class ProductsModule { }
