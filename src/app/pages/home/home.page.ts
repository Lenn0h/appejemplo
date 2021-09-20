/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  miuser: string = '';
  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(
      params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.miuser = this.router.getCurrentNavigation().extras.state.user.username;
        console.log(this.miuser);
      }
});

  }

}
