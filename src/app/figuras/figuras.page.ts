import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.page.html',
  styleUrls: ['./figuras.page.scss'],
})
export class FigurasPage implements OnInit {

  constructor(private db: Storage) { }

  async ngOnInit() {
    const figuras = [
      {
        fig: "Set de figuras Pokémon Musculosas",
        precio: 30990,
        vendido: false,
        stock: 10,
      },
      {
        fig: "My Hero Academia Lemillion",
        precio: 25990,
        vendido: false,
        stock: 10,
      },
      {
        fig: "Robot Fire Fire Edición coleccionista",
        precio: 100990,
        vendido: false,
        stock: 10,
      },
    ];
    await this.db.set("figura", figuras)
  };

}
