import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


products:any=[];

finalData:any=[]

prod:any=[];

  constructor(private productService: ProductsService) {

    this.getProducts();
    this.getCategories(); 
    
  }

  ngOnInit(): void {
  }


  getCategories(){
    
    this.productService.getCategories()
    .subscribe( (resp:any)=>{
      
      resp.sort( (a:any,b:any)=>a.ordinal - b.ordinal )




      //get name of category and push in new array
      const dataCategories:any=[];
      Object.keys(resp).forEach( key=>{
        const categoryName= resp[key].name;
        const categoryId= resp[key].id;
        dataCategories.push( {nameCategory:categoryName, idCategory:categoryId});
       


        //get products for category and 
        const productCategory:any=[];
        const productsOfCategory = this.products;
        Object.keys(productsOfCategory).forEach( key=>{
          
          const idCategoryProduct= productsOfCategory[key].product_data.categories[0].category_id;
          const nameProduct = productsOfCategory[key].product_data.name;
          const ordinal= productsOfCategory[key].product_data.categories[0].ordinal;
          
          if (categoryId===idCategoryProduct) {
            productCategory.push({idCategoryProduct,nameProduct,ordinal})
          }

          productCategory.sort( (a:any,b:any)=>a.ordinal - b.ordinal );
  
  
        })
        
        this.finalData.push({categoryId,categoryName,productCategory});
        console.log("DATOS FINAL", this.finalData);
        

      })

    })
  }


  getProducts(){
    
    this.productService.getProducts()
    .subscribe( (resp:any)=>{
      this.products=resp;
    } )
  }

 

}
