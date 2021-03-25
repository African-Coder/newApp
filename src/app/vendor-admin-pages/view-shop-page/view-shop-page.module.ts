import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewShopPagePageRoutingModule } from './view-shop-page-routing.module';

import { ViewShopPagePage } from './view-shop-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewShopPagePageRoutingModule
  ],
  declarations: [ViewShopPagePage]
})
export class ViewShopPagePageModule {}
