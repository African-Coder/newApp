import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IVendor } from '../vendor/vendor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorAdminService {

   get_url = 'http://localhost:3000/products/';
  post_url = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) { }
/*
  getVendors() : Observable<IVendor[]> {
    return this.http.get<IVendor[]>(this.get_url);
  }*/

  

  public getinfo()
  {
    return this.http.get<any>(this.get_url);
  }
 
  
  public postinfo(addven:any)
  {
    return this.http.post<any>(this. post_url, addven, {});
  }
}
