import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-ion-modal',
  templateUrl: './ion-modal.page.html',
  styleUrls: ['./ion-modal.page.scss'],
})
export class IonModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

 async  _openModal() {

    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        "name": "Vendor",
        "type": "Active"
      }
    })

    return await modal.present();

  }



}
