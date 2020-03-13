import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{BuyerService} from 'src/app/service/buyer.service';
import{Items} from 'src/app/model/items';
import{Purchasehistory} from 'src/app/model/purchasehistory';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  list:Purchasehistory[]=[];
  purchasehistory:Purchasehistory;
  item:Items;
  list1:Items[]=[];

  constructor(private service:BuyerService,private route:Router) {
    this.item=JSON.parse(localStorage.getItem('item1'));
    this.list1.push(this.item)
  console.log(this.item);
  console.log(this.item.iid);
  let id=localStorage.getItem('bid');
    this.service.ViewOrders(id).subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
   }

  ngOnInit() {
  }
  Logout()
  {
    this.route.navigateByUrl('home');
  }

}
