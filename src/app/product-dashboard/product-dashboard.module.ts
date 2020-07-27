import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardRoutingModule } from './product-dashboard-routing.module';
import { ProductDashboardComponent } from './product-dashboard.component';
import { SharedModule } from '../_module/shared/shared.module';
import { CoreModule } from '../_module/core/core.module';




@NgModule({
  declarations: [ProductDashboardComponent],
  imports: [
    CommonModule,
    ProductDashboardRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class ProductDashboardModule { }
