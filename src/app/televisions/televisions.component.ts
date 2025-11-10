import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { TelevisionsService } from '../televisions.service';


@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {

  
  televisions:Product[]=[];

  constructor(private dsObj:TelevisionsService) { }

  ngOnInit() {
    this.dsObj.getTelevisionsData().subscribe(
      data=>{
        this.televisions=data;
      },
      err=>{
        console.log("err is ",err)
      }
      )
  }

}
