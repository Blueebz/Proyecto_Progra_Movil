import { Component } from '@angular/core';
import { MiapicitaService } from './api/miapicita.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private api : MiapicitaService) {
  }
  async ngOnInit(){
    await this.api.getProductos();
  }
}