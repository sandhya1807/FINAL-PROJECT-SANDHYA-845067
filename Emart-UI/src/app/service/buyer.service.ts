import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{observable, Observable} from'rxjs';
import{Buyer} from '../model/buyer';
import{Cart} from '../model/cart';
import { Category } from '../Model/category';
import { Purchasehistory } from '../Model/purchasehistory';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json',
})}


@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:55738/Buyer/';

  constructor(private http:HttpClient) { }
  public EditProfile(buyer:Buyer):Observable<any>
  {
    return this.http.put<any>(this.url+'EditProfile',JSON.stringify(buyer),Requestheaders);
  }
  public GetProfile(Bid:string):Observable<any>
  {
    return this.http.get<Buyer>(this.url+'GetProfile/'+Bid,Requestheaders);
  }
  public GetAllItems():Observable<any>
  {
    return this.http.get<any>(this.url+'GetAllItems',Requestheaders);
  }
  public SearchItems(name:string):Observable<any>
  {
    return  this.http.get<any>(this.url+'SearchItems/'+name,Requestheaders);
  }
  public GetCategory():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'GetCategory',Requestheaders);
  }
  public SearchByCategoryId(categoryid:string):Observable<any>
  {
    return this.http.get<any>(this.url+'SearchByCategoryId/'+categoryid,Requestheaders);
  }
  
  public PurchaseHistory(id:string):Observable<any>
  {
    return this.http.post<any>(this.url+'PurchaseHistory/'+id,Requestheaders);
  }
  
  public ViewCart() :Observable<Cart>
  {
    return this.http.get<Cart>(this.url+'ViewCart',Requestheaders);
   }

   public Addtocart(cartobj:Cart) :Observable<Cart>
  {
    console.log(cartobj);
    return this.http.post<Cart>(this.url+'Addtocart',cartobj,Requestheaders);
   }

   public Deletefromcart(cartid:string) :Observable<Cart>
  {
    return this.http.delete<Cart>(this.url+'Deletefromcart/'+cartid,Requestheaders);
   }
   public BuyItem(PurchaseHistory:Purchasehistory):Observable<any>
   {
return this.http.post<any>(this.url+'BuyItem',PurchaseHistory,Requestheaders);
   }

 public ViewOrders(id:any):Observable<any>
 {
   return this.http.get<any>(this.url+'purchasehistory/'+id,Requestheaders);
 }
}
