import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productServices : ProductsService){}
  ngOnInit(): void {
    this.productServices.getProducts().subscribe((res)=>{
      this.products = res as Product[];
    })
  }
}
