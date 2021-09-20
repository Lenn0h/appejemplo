import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.page.html',
  styleUrls: ['./logins.page.scss'],
})
export class LoginsPage implements OnInit {

  usuario=
  {
    username:'',
    password:''
  };
  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  onSubmit()
  { console.log(this.usuario.username + ' ' + this.usuario.password);

    if(this.usuario.username==='wacoldo' && this.usuario.password==='123')
    {
      //ir al inicio
      console.log(this.usuario.username + ' ' + this.usuario.password);
      // eslint-disable-next-line prefer-const
      let navigationExtras: NavigationExtras=
      {
        state:{
          user:this.usuario
        }
      };

      this.router.navigate(['/home'],navigationExtras);
    }

    else
    {
      this.presentAlert();
    }

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'No se puede iniciar sesión',
      message: 'Reingrese usuario y/o contraseña',
      buttons: ['OK']
    });

    await alert.present();
  }

}
