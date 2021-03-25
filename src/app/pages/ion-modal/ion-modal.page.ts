import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ViewVendorPage } from 'src/app/components/view-vendor/view-vendor.page';
import { EditVendorPage } from 'src/app/components/edit-vendor/edit-vendor.page';

@Component({
  selector: 'app-ion-modal',
  templateUrl: './ion-modal.page.html',
  styleUrls: ['./ion-modal.page.scss'],
})
export class IonModalPage implements OnInit {

  vendors = [
    {
      name: "KFC",
      type: "Active",
      customers: 10
    },
    {
      name: "Nandos",
      type: "Active",
      customers: 16
    },
    {
      name: "Nkuku Box",
      type: "Active",
      customers: 20
    },
    {
      name: "Debonair's Pizza",
      type: "Pending",
      customers: 0
    }

  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

 async  _openModal(vendor) {

    const modal = await this.modalCtrl.create({
      component: ViewVendorPage,
      componentProps: {
        vendor: vendor
      }
    });

    return await modal.present();

  }

  async  _editModal(vendor, index) {

    const modal = await this.modalCtrl.create({
      component: EditVendorPage,
      componentProps: {
        vendor: vendor
      }
    });

    // modal.onDidDismiss().then(data=> {
    //   this.vendors[index]=data.data;
    //   console.log(data);
    //});

    return await modal.present();

  }



}
