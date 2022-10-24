import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiapicitaService {

  uri : string = "http://localhost:5000/";
  constructor(private api : HttpClient) { }

  async getProductos(){
    await this.api.get(this.uri+"productos").toPromise().then((value) => {
      console.log(value);
      return value; 
    })
  }
}