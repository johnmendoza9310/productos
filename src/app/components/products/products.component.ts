import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";


//https://assets.compramass.com/products/P000000001442@3x.jpg

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  

products:any=[];
finalData:any=[]
//prod:any=[];

imageProduct:string="";


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
       


        //get products for category and sort for ordinal
        const productCategory:any=[];
        const productsOfCategory = this.products;
        Object.keys(productsOfCategory).forEach( key=>{
          
          const idCategoryProduct= productsOfCategory[key].product_data.categories[0].category_id;
          const nameProduct = productsOfCategory[key].product_data.name;
          const ordinal= productsOfCategory[key].product_data.categories[0].ordinal;
          const price = productsOfCategory[key].product_data.price;
          const ean = productsOfCategory[key].product_data.ean;
          const kind = productsOfCategory[key].product_data.kind;
          let image:string="";



        // this.getImage(ean,kind);

          //image=this.imageProduct;



          
          if (categoryId===idCategoryProduct) {
            productCategory.push({idCategoryProduct,nameProduct,ordinal,price, ean,kind})
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

  getImage(ean:any, kind:any){

    this.productService.getImages(ean,kind)
    .subscribe( (resp:any)=>{
      console.log("IMPRIMIENDO IMAGEN ",resp);
      
    })
  }

  


 

}
