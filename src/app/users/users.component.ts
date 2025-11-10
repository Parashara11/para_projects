import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit ,OnDestroy {
  mysubs:Subscription;
  user:any;
  constructor(private details:UsersService,private router:Router){

  }
  ngOnInit(){
    this.mysubs=this.details.getUsersData().subscribe(
      data=>{
        this.user=data;
      },
      err=>{
        console.log("The error is",err)
      }
    )
  }
  onSelectId(id){
    this.router.navigateByUrl('users/'+id)
  }
  ngOnDestroy(){
    this.mysubs.unsubscribe();
  }
  

}

