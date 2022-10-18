import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private db : Storage, private appi: HttpClient) {
    this.appi.get('');
    
  }
  async ngOnInit(){
    await this.db.create();
  }
}