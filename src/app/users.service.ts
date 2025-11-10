import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private hc:HttpClient) { }
  getUsersData():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/users')
  }
  getUsersDataById(id):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/users/'+id)
    
  }
}

