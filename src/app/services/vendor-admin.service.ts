import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IVendor } from '../vendor/vendor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorAdminService {

  private _url: string = 'http://localhost:3000/vendor';

  constructor(private _https: HttpClient) { }

  getVendors() : Observable<IVendor[]> {
    return this._https.get<IVendor[]>(this._url);
  }

}
