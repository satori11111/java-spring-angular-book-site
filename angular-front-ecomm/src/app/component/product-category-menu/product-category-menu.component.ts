// import {Component, OnInit} from '@angular/core';
// import {ProductCategory} from "../../common/product-category";
// import {ProductService} from "../../sevices/product.service";
//
// @Component({
//   selector: 'app-product-category-menu',
//   templateUrl: './product-category-menu.component.html',
//   styleUrls: ['./product-category-menu.component.css']
// })
// export class ProductCategoryMenuComponent implements  OnInit{
//   productCategories:ProductCategory[]=[];
//   ngOnInit(): void {
//     this.listProductCategories();
//
//   }
//   constructor(private  productService:ProductService) {
//   }
//   listProductCategories(){
//     this.productService.getProductCategories().subscribe(data=>{ console.log("Product Categories="+JSON.stringify(data));
//     this.productCategories=data})
//   }
//
// }
