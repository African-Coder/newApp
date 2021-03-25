import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'vendor-reg',
    loadChildren: () => import('./vendor-reg/vendor-reg.module').then( m => m.VendorRegPageModule)
  },  {
    path: 'ion-modal',
    loadChildren: () => import('./pages/ion-modal/ion-modal.module').then( m => m.IonModalPageModule)
  },
  {
    path: 'edit-vendor',
    loadChildren: () => import('./components/edit-vendor/edit-vendor.module').then( m => m.EditVendorPageModule)
  },
  {
    path: 'view-vendor',
    loadChildren: () => import('./components/view-vendor/view-vendor.module').then( m => m.ViewVendorPageModule)
  },
  {
    path: 'driver',
    loadChildren: () => import('./driver/driver/driver.module').then( m => m.DriverPageModule)
  },
  {
    path: 'driver-order',
    loadChildren: () => import('./driver-components/driver-order/driver-order.module').then( m => m.DriverOrderPageModule)
  },
  {
    path: 'vendor-admin',
    loadChildren: () => import('./vendor/vendor-admin/vendor-admin.module').then( m => m.VendorAdminPageModule)
  },
  {
    path: 'edit-shop-page',
    loadChildren: () => import('./vendor-admin-pages/edit-shop-page/edit-shop-page.module').then( m => m.EditShopPagePageModule)
  },
  {
    path: 'view-shop-page',
    loadChildren: () => import('./vendor-admin-pages/view-shop-page/view-shop-page.module').then( m => m.ViewShopPagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
