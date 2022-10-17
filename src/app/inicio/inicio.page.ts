import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private midb : Storage) { }

  async ngOnInit() {
    await this.midb.get("games").then((value) => {
      console.log(value);

    });
    await this.midb.get("mesa").then((value) => {
      console.log(value);

    });
    await this.midb.get("figura").then((value) => {
      console.log(value);

    });
    
  }
  

}
