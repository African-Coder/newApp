import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewShopPagePage } from './view-shop-page.page';

const routes: Routes = [
  {
    path: '',
    component: ViewShopPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewShopPagePageRoutingModule {}
