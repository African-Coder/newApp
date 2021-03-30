import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  category:string ="";
  product_name:string ="";
  product_price:string ="";
  product_description:string ="";

  shops = [
    {
      name:"Kota Queens",
      sales: 10,
      address: "123 Soshanguve Block L"
    }
  ];

  constructor(private modalCtrl: ModalController,
              private _vendorAdminService : VendorAdminService,
              private actRoute:ActivatedRoute) { }

  ngOnInit() {
this.actRoute.params.subscribe((data:any) =>{

this.product_name = data.product_name;
this.product_price = data.product_price;
this.product_description = data.product_description;
this.category = data.category;

  console.log(data);
});
    this._vendorAdminService.getinfo()
        .subscribe(data => this.shops = data);

  }

  async  _openModal(shop) {

    const modal = await this.modalCtrl.create({
      component: ViewShopPagePage,
      componentProps: {
        shop: shop
      }
    });


     this._vendorAdminService.getinfo()
        .subscribe(data => this.shops = data);

    return await modal.present();

  }

  async  _editModal(shop, index) {

    const modal = await this.modalCtrl.create({
      component: EditShopPagePage,
      componentProps: {
        shop: shop
      }
    });
const   data = {
product_name:this.product_name,
product_price:this.product_price,
product_description:this.product_description,
category:this.category
};
 this._vendorAdminService.postinfo(data)
        .subscribe(data => this.shops = data);

    return await modal.present();

  }

}
