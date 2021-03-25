import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  vendors = [
    {
      name: "KFC",
      type: "Active"
    },
    {
      name: "Nandos",
      type: "Active"
    },
    {
      name: "Nkuku Box",
      type: "Pending"
    }

  ];
 
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  _dismiss() {
    this.modalCtrl.dismiss();
  }

}
