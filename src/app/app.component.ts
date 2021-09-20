import { Component } from '@angular/core';
import { Opmenu } from './interfaces/opmenu';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones: Opmenu[]=[
    {
      link:'home',
      texto:'Home',
      icono:'home'
    },
    {
      link:'pag2',
      texto:'Listas',
      icono:'list'
    },
    {
      link:'pag3',
      texto:'Personal',
      icono:'person'
    },
    {
      link:'inputs',
      texto:'Uso de inputs',
      icono:'logo-xbox'
    },
    {
      link:'logins',
      texto:'Login',
      icono:'power'
    }
  ];
  constructor() {}
}
