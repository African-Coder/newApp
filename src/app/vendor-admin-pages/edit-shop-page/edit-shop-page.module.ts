import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditShopPagePageRoutingModule } from './edit-shop-page-routing.module';

import { EditShopPagePage } from './edit-shop-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditShopPagePageRoutingModule
  ],
  declarations: [EditShopPagePage]
})
export class EditShopPagePageModule {}
