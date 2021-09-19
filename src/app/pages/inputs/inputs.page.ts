import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {


  n1: number;
  n2: number;

  x: number;
  y: number;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async onClick() {

    // eslint-disable-next-line prefer-const
    let res= this.n1+this.n2;
    const alert = await this.alertController.create({
      header: 'Resulta de la suma',
      message: res.toString(),
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async sumarForm()
  {
    const alert = await this.alertController.create({
      header: 'Resulta de la suma con Formulario',
      message: (this.x+this.y).toString(),
      buttons: ['OK']
    });
    await alert.present();
  }

}
