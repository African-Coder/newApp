import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-shop-page',
  templateUrl: './edit-shop-page.page.html',
  styleUrls: ['./edit-shop-page.page.scss'],
})
export class EditShopPagePage implements OnInit {

  shops: any = [] ;

  constructor(private editShopCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.editShopCtrl.dismiss(this.shops)
  }

}
