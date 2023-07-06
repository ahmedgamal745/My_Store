import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get<any>("https://fakestoreapi.com/products").pipe(map((res:any)=>{
      return res
    }))
  }

  getId(id:any){
    return this.http.get("https://fakestoreapi.com/products/"+id)
  }
}

