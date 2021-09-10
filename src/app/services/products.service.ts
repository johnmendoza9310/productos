import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = `http://www.mocky.io/v2/5ed0b4443500005b00ff9e02`;
  private urlImages=`https://assets.compramass.com/products/`;
  //private urlImages=`/products/`;
 // private url = `/v2/5ed0b4443500005b00ff9e02`;

  constructor( private http: HttpClient) {

    console.log("prueba");
    
   }



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


  getImages(ean:any, kind:any){

    if (kind ===1) {

      //Get image Kind 1 small image
    return this.http.get(`${this.urlImages}${ean}-80@3x.jpg`)
    .pipe( map ( data=>{
      return data;
    }))
      
    }else {

    //Get image Kind 2 small image
    return this.http.get(`${this.urlImages}${ean}@3x.jpg`)
    .pipe( map ( data=>{
    return data;
    }))
      
    }



    


  }
}
