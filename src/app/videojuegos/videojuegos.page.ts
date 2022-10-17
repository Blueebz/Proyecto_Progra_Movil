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

    const videojuego = [
        {
          game: "God of War",
          precio : 40000,
          vendido: false,
          stock: 10,
        },
        {
          game: "Final Fantasy VII Remake",
          precio : 29990,
          vendido: false,
          stock: 10,
        },
        {
          game: "Fifa 22",
          precio : 39990,
          vendido: false,
          stock: 10,
        },
        {
          game: "Persona 5 Royal",
          precio : 30990,
          vendido: false,
          stock: 10,
        },
        {
          game: "Tekken 7",
          precio : 15990,
          vendido: false,
          stock: 10,
        },

      ];

    await this.db.set("games", videojuego)

    
  };

}
