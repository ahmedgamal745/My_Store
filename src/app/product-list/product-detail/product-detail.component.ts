import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/Products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  product : Product = new Product()
  quantity: number = 1;
  id: number = 0
  public products :any

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private cartService : CartService){
                this.route.paramMap.subscribe((params: ParamMap)=>{
                  this.id = Number(params.get('id'))
                })
              }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data.find((p: Product) => {
        return p.id === this.id
      }) 
    });

    

  }
  
    updateQuantity (event:Event){
      this.quantity = Number((event))
    }
    addToCart() {
      this.productsService.getId(this.product.id).subscribe(data => {
        const selectedProduct = data as Product;
        this.cartService.add(this.quantity, this.products);
        
      });
    
      
    }
}
