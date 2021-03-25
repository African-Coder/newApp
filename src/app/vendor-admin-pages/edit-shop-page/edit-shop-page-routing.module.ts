import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditShopPagePage } from './edit-shop-page.page';

const routes: Routes = [
  {
    path: '',
    component: EditShopPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditShopPagePageRoutingModule {}
