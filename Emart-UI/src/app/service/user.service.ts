import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{ Observable} from 'rxjs';
import{Buyer} from '../model/buyer';
import{Seller} from '../model/seller';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url:string= 'http://localhost:55738/Account/';
  
  constructor(private http:HttpClient) { }
  public BuyerLogin(username:string,password:string):Observable<any>
  {
    return this.http.get<any>(this.url+'BuyerLogin/'+username+'/'+password,Requestheaders);
  }
  public SellerLogin(username:string,password:string):Observable<any>
  {
    return this.http.get<any>(this.url+'SellerLogin/'+username+'/'+password,Requestheaders);
  }
  public buyerregister(buyer:Buyer):Observable<any>
  {
    return this.http.post<any>(this.url+'BuyerRegister',JSON.stringify(buyer),Requestheaders);
  }
  public Sellerregister(seller:Seller):Observable<any>
  {
    return this.http.post<any>(this.url+'SellerRegister',JSON.stringify(seller),Requestheaders);
  }
}
