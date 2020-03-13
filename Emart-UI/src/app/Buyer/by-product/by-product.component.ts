import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { combineLatest } from 'rxjs';
import { BuyerService } from 'src/app/Service/buyer.service';
import { Items } from 'src/app/Model/items';
import { Purchasehistory } from 'src/app/Model/purchasehistory';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Model/cart';

@Component({
  selector: 'app-by-product',
  templateUrl: './by-product.component.html',
  styleUrls: ['./by-product.component.css']
})
export class ByProductComponent implements OnInit {
  list:Items[];
  RegisterForm:FormGroup;

  constructor(private service:BuyerService,private formBuilder:FormBuilder,private route:Router) { }
  item:Items;
  cart:Cart;
  obj:Purchasehistory;
  submitted=false;
 
  ngOnInit() {
    this.RegisterForm=this.formBuilder.group({
      transactiontype:['',Validators.required],
      cardnumber:['',Validators.required],
      cvv:['',Validators.required],
      ed:['',Validators.required],
      name:['',Validators.required],
      noofitems:['',Validators.required],
      remarks:['',Validators.required]
    })
     this.cart=JSON.parse(localStorage.getItem('item1'));
     console.log(this.cart);
     this.item=JSON.parse(localStorage.getItem('item1'));
     console.log(this.item);
  }
  onSubmit()
  {
      this.submitted=true;
      let bid=localStorage.getItem('bid');
      console.log(bid);
      this.cart=JSON.parse(localStorage.getItem('item1'));
      console.log(this.cart);
      if(this.RegisterForm.valid)
      {
         this.obj=new Purchasehistory();
         this.obj.id='TID'+Math.round(Math.random()*1000);
         this.obj.Bid=bid;
         this.obj.sid=this.cart.sid;
      this.obj.noofitems=this.RegisterForm.value["noofitems"];
      this.obj.iid=this.cart.iid;
      this.obj.transactiontype=this.RegisterForm.value["transactiontype"]
      this.obj.Datetime=new Date();
      this.obj.remarks=this.RegisterForm.value["remarks"];
      console.log(this.obj);
      this.service.BuyItem(this.obj).subscribe(res=>{
       console.log("Purchase was Sucessfull");
       alert('Purchase Done Successfully');
          },err=>{
         alert('Please add Details');
      })
    }
    }
Logout(){
  localStorage.clear();
  this.route.navigateByUrl('/login');
}
get f() { return this.RegisterForm.controls; }
}
