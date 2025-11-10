import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
import { ActivatedRoute,} from '@angular/router'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user: any;
  constructor(private ar: ActivatedRoute, private us: UsersService) { }

  ngOnInit(): void {
    let id = this.ar.snapshot.params.id;
    this.us.getUsersDataById(id).subscribe(
      data => {
        this.user = data;
        console.log(this.user)
      },
      err => {
        console.log("The error is", err)
      }
    )
  }
}


