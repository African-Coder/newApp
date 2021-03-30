import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {


   get_url = 'http://localhost:3000//';
  post_url = 'http://localhost:3000//';


  constructor(private http: HttpClient) { }


  public getinfo()
  {
    return this.http.get<any>(this.get_url);
  }
 
  
  public postinfo(addven:any)
  {
    return this.http.post<any>(this. post_url, addven, {});
  }
}
