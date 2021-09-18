import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {

  personas=[{
    nombre:'wacoldo',
    apellido:'soto',
    scrimagen:'../assets/images/persona.jpg'
  },
  {
   nombre:'Diogenes',
   apellido:'carrasco',
   scrimagen:'../assets/images/persona.jpg'
  },
];
  constructor() { }

  ngOnInit() {
  }

}
