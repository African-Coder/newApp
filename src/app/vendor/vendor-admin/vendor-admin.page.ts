import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VendorAdminService } from 'src/app/services/vendor-admin.service';
import { EditShopPagePage } from 'src/app/vendor-admin-pages/edit-shop-page/edit-shop-page.page';
import { ViewShopPagePage } from 'src/app/vendor-admin-pages/view-shop-page/view-shop-page.page';
import { IVendor } from 'src/app/vendor/vendor';


@Component({
  selector: 'app-vendor-admin',
  templateUrl: './vendor-admin.page.html',
  styleUrls: ['./vendor-admin.page.scss'],
})
export class VendorAdminPage implements OnInit {

  shops:any = [];

  constructor(private modalCtrl: ModalController,
              private _vendorAdminService : VendorAdminService) { }

  ngOnInit() {

    this._vendorAdminService.getVendors()
        .subscribe(data => this.shops = data);

  }

  async  _openModal(shop) {

    const modal = await this.modalCtrl.create({
      component: ViewShopPagePage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

  async  _editModal(shop, index) {

    const modal = await this.modalCtrl.create({
      component: EditShopPagePage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

}
