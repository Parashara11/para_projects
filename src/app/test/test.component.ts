import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testVar:any
  dat:any
  constructor(private testObj: TestService) { }

  ngOnInit() {
    this.testObj.testingFunction().subscribe(
      data=>{
        this.testVar=data;
      },
      err=>{
        console.log('error is ',err)
      }
    )
  }

}


