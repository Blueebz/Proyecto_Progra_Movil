import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegomesaPageRoutingModule } from './juegomesa-routing.module';

import { JuegomesaPage } from './juegomesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegomesaPageRoutingModule
  ],
  declarations: [JuegomesaPage]
})
export class JuegomesaPageModule {}
