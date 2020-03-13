import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import{Category} from '../model/category';
import{SubCategory} from '../model/sub-category';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string='http://localhost:55738/Admin/'

  constructor(private http:HttpClient) { }
    public AddCategory(category:Category):Observable<any>
  {
    return this.http.post<any>(this.url+'AddCategory',JSON.stringify(category),Requestheaders)
  }
  public AddSubCategory(subcategory:SubCategory):Observable<any>
  {
    return this.http.post<any>(this.url+'AddSubCategory',JSON.stringify(subcategory),Requestheaders)
  }
  public DeleteCategory(categoryid:number):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteCategory/'+categoryid,Requestheaders);
  }
  public DeleteSubCategory(subcategoryid:number):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteSubCategory/'+subcategoryid,Requestheaders);
  }
  public ViewCategories():Observable<any>
  {
    return this.http.get<any>(this.url+'ViewCategories',Requestheaders);
  }
  public  ViewSubCategories():Observable<any>
  {
    return this.http.get<any>(this.url+'ViewSubCategories',Requestheaders);
  }
  public  GetCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'GetCategories',Requestheaders);
  }
}

