import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service'
import { Product } from '../models/product.model'

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

  mobiles:Product[]=[];

  //inject obj of dataservice class
  constructor(private dsObj:MobileService){
   }

   ngOnInit(){

    this.dsObj.getMobilesData().subscribe(
      data=>{
        this.mobiles=data;
      },
      err=>{
        console.log("err is ",err)
      }
      )
   }
}
