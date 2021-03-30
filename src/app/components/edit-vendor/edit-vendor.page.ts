import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VendorAdminService } from 'src/app/services/vendor-admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.page.html',
  styleUrls: ['./edit-vendor.page.scss'],
})
export class EditVendorPage implements OnInit {
  restuarant_name:string ="";
  address:string ="";
  email_address:string ="";
  status:string ="";
  vendor: any ;

  constructor(private editVendorCtrl : ModalController,
    private _vendorAdminService : VendorAdminService,
    private actRoute:ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data:any) =>{

      this.restuarant_name = data.restuarant_name;
      this.address = data.address;
      this.email_address = data.email_address;
      this.status = data.status;
      
        console.log(data);
      });
          this._vendorAdminService.getinfo()
              .subscribe(data => this.vendor = data);
  }

  update()
  {
    this.editVendorCtrl.dismiss(this.vendor);

  }
  

}
