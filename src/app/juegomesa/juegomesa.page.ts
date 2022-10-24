import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-juegomesa',
  templateUrl: './juegomesa.page.html',
  styleUrls: ['./juegomesa.page.scss'],
})
export class JuegomesaPage implements OnInit {

  constructor(private db: Storage) { }

  async ngOnInit() {
    const juegomesa = [
      {
        nomjuego : "Catan",
        precio : 29990,
        vendido : false,
        stock : 10,
      },
      {
        nomjuego : "Exploding kittens",
        precio : 14990,
        vendido : false,
        stock : 10,
      },
      {
        nomjuego : "Marvel Champions",
        precio : 50990,
        vendido : false,
        stock : 10,
      },
      {
        nomjuego : "Dixit",
        precio : 29990,
        vendido : false,
        stock : 10,
      },
  ];
    await this.db.set("mesa", juegomesa)
    
  };
  
}
