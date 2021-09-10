import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = `http://www.mocky.io/v2/5ed0b4443500005b00ff9e02`;

  constructor( private http: HttpClient) { }



  getCategories(){

    return this.http.get(this.url)
    .pipe( map( (data:any)=>{

      console.log("data completa", data);
      //console.log("data categorias", data.categories);
      return data.categories;
      
    }))



  }


  getProducts(){

    return this.http.get(this.url)
    .pipe( map( (data:any)=>{

      //console.log("data productos", data.products);
      return data.products;
      
    }))
    
  }
}
