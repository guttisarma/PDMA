import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProdNewComponent } from './prod-new/prod-new.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdMgmtComponent } from './prod-mgmt/prod-mgmt.component';
import { ProdAssignComponent } from './prod-assign/prod-assign.component';
import { ProdConvComponent } from './prod-conv/prod-conv.component'

@NgModule({
  declarations: [ProdNewComponent, ProdDetailComponent, ProdListComponent, ProdMgmtComponent, ProdAssignComponent, ProdConvComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
