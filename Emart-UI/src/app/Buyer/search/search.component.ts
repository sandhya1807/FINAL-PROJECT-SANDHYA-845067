import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Model/items';
import { BuyerService } from 'src/app/service/buyer.service';
import { Router } from '@angular/router';
import{Cart} from 'src/app/model/cart';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itemForm:FormGroup;
  item:Items;
  itemlist:Items[];
  itemname:string;
  cartobj:Cart;
  
    constructor(private builder:FormBuilder,private service:BuyerService,private route:Router) { }
  
    ngOnInit() {
      this.itemForm=this.builder.group({
         itemname:[''],
      });
  
    }
    Search()
    {
       this.itemname=this.itemForm.value["itemname"];
      this.service.SearchItems(this.itemname).subscribe(res=>{
          this.itemlist=res;
          console.log(this.itemlist);
    })
  }
    Buy(item:Items)
   {
   console.log("hello")
   console.log(item);
   this.item=item;
   localStorage.setItem('item1',JSON.stringify(this.item));
    this.route.navigateByUrl('/buyerlandingpage/byproduct')
}
 
Add(item:Items)
{
  let bid=localStorage.getItem('bid');
  console.log(bid);
  console.log(item);
this.cartobj=new Cart();
this.cartobj.cartId='CT'+Math.round(Math.random()*999);
this.cartobj.sid=item.sid;
this.cartobj.categoryId=item.categoryid;
this.cartobj.subcategoryId=item.subcategoryid;
this.cartobj.image=item.image;
this.cartobj.iid=item.iid;
this.cartobj.itemname=item.itemname;
this.cartobj.price=item.price.toString();
this.cartobj.description=item.description;
this.cartobj.remarks=item.remarks;
this.cartobj.Bid=bid;
console.log(this.cartobj);
     this.service.Addtocart(this.cartobj).subscribe(
       res=>{
         this.cartobj=res;
       console.log(this.cartobj);
       alert('Added to cart');
     },
     err=>
     {
       console.log(err);
      }
   )
    }

logout(){
  localStorage.clear();
  this.route.navigateByUrl('/login')
}
  }
  
 
    
    
  