import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})


export class TelevisionsService {

  //inject HttpClient service object
  constructor(private hc:HttpClient) { }



    getTelevisionsData():Observable<Product[]>{
        //http get
       return this.hc.get<Product[]>("http://localhost:3000/televisions")
    }
  
}



