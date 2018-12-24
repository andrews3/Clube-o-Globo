import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AngularFireDatabase, PathReference} from '@angular/fire/database';

@IonicPage()
@Component({
  selector: 'page-voucher',
  templateUrl: 'voucher.html',
})
export class VoucherPage {

  private voucher: any = {};

  constructor(private navCtrl: NavController,
              private angularFireDb: AngularFireDatabase) {
    this.voucher = {
      parceiro: {},
      assinante: {}
    };
  }

  ionViewDidLoad() {
    this.getVoucher();
  }

  private getVoucher() {
    const ref: PathReference = 'voucher';
    const eventRef = this.angularFireDb.object(ref);
    eventRef.snapshotChanges().subscribe(action => {
      this.voucher = action.payload.val();
    });
  }

  private leave() {
    this.navCtrl.pop();
  }

  private getData(isoDate: Date) {
    if (isoDate) {
      const data = new Date(isoDate);
      let dia, mes, hora, minuto;
      dia = data.getDate();
      mes = data.getMonth() + 1;
      hora = data.getHours();
      minuto = data.getMinutes();
      if (dia < 10) {
        dia = "0" + dia;
      }
      if (mes < 10) {
        mes = "0" + mes;
      }

      return dia + "/" + mes + "/" + data.getFullYear();
    } else
      return ""
  }

  private getCpf(cpf) {
    if (cpf) {
      cpf = cpf.toString();
      return cpf.substring(0, 3) + "." + cpf.substring(3, 6) + "." + cpf.substring(6, 9) + "-" + cpf.substring(9, 11);
    }
  }
}
