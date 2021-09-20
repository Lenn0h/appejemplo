import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginsPageRoutingModule } from './logins-routing.module';

import { LoginsPage } from './logins.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoginsPage]
})
export class LoginsPageModule {}
