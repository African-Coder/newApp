import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VendorAdminService } from 'src/app/services/vendor-admin.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-shop-page',
  templateUrl: './edit-shop-page.page.html',
  styleUrls: ['./edit-shop-page.page.scss'],
})
export class EditShopPagePage implements OnInit {
  category:string ="";
  product_name:string ="";
  product_price:string ="";
  product_description:string ="";
  shops: any ;
  

  constructor(private editShopCtrl: ModalController,
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
  
  }/*
const   data = {
product_name:this.product_name,
product_price:this.product_price,
product_description:this.product_description,
category:this.category
};
 this._vendorAdminService.postinfo(data)
        .subscribe(data => this.shops = data);*/
  dismiss() {
    this.editShopCtrl.dismiss(this.shops)
  }

}
