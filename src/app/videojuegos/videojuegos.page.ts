import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.page.html',
  styleUrls: ['./videojuegos.page.scss'],
})
export class VideojuegosPage implements OnInit {

  constructor(private db: Storage) { }

  async ngOnInit() {
    let obj = {
      game: "God of War",
      precio : 40000,
      vendido: false,
      stock: 10
    }

    await this.db.set("games", obj)

    
  };

}
