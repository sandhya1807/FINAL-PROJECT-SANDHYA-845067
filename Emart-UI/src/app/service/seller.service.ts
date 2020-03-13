import { Injectable } from '@angular/core';
import{HttpHeaders,HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import{Seller} from '../model/seller';
import{Items} from '../model/items';
import { Category } from '../Model/category';
import { SubCategory } from '../model/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string= 'http://localhost:55738/Item/';
  url1:string= 'http://localhost:55738/Seller/';
  
  constructor(private http:HttpClient) { }
  public GetItem(Iid:string):Observable<Items>
  {
    return this.http.get<Items>(this.url+'GetItem/'+Iid,Requestheaders);
  }
 
  public ViewItems(Sid:string):Observable<any>
  {
    return this.http.get<any>(this.url+'ViewItems/'+Sid,Requestheaders);
  }
  public AddItem(items:Items):Observable<any>
  {
    return this.http.post<any>(this.url+'AddItem',items);
  }
   public UpdateItem(items:Items):Observable<any>
  {
    return this.http.put<any>(this.url+'UpdateItem',JSON.stringify(items),Requestheaders);
  }
  public DeleteItem(Iid:string):Observable<Seller>
  {
    return this.http.delete<Seller>(this.url+'DeleteItem/'+Iid,Requestheaders);
  }
   public EditProfile(seller:Seller):Observable<any>
  {
    return this.http.put<any>(this.url1+'EditProfile',JSON.stringify(seller),Requestheaders);
  }
  public GetProfile(Sid:string):Observable<Seller>
  {
return this.http.get<Seller>(this.url1+'GetProfile/'+Sid,Requestheaders);
  }
   public GetCategory():Observable<Category[]>
  {
    console.log("service");
return this.http.get<Category[]>(this.url+'Getcategory',Requestheaders);
  }
  public GetSubCategory(categoryid:string):Observable<SubCategory[]>
  {
    return this.http.get<SubCategory[]>(this.url+'GetSubCategory/'+categoryid,Requestheaders);
  }
}
