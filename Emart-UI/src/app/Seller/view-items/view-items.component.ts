import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators}from '@angular/forms';
import{SellerService} from 'src/app/service/seller.service';
import{Items} from'src/app/model/items';
import{Category} from 'src/app/model/category';
import{SubCategory} from 'src/app/model/sub-category';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  item:Items;
  list:Items[];
  sid:string;
image:string;
   itemForm:FormGroup;
   category:Category[];
   categorylist:Category[];
   subcategorylist:SubCategory[];
   submitted=false;
  
   constructor(private service:SellerService,private formBuilder:FormBuilder) {}

  ngOnInit(){
    this.itemForm=this.formBuilder.group({
       itemname:['',Validators.required],
       price:['',Validators.required],
      description:['',Validators.required],
      categoryid:[''],
      iid:[''],
      stocknumber:['',Validators.required],
      remarks:[''],
      subcategoryid:[''],
   
    })
    this.ViewItems();
  }
  get f() { return this.itemForm.controls; }
  Search(id:string)
  {
    this.service.GetItem(id).subscribe(res=>{
      this.item=res;
      this.sid=this.item.sid;
      this.image=this.item.image;
      console.log(this.item);
      this.itemForm.setValue({
       iid:this.item.iid,
     categoryid:this.item.categoryid,
    subcategoryid:this.item.subcategoryid,
     itemname:this.item.itemname,
    description:this.item.description,
    price:this.item.price,
    stocknumber:this.item.stocknumber,
    remarks:this.item.remarks,
    
      })
    },err=>{
    console.log(err);
  })
}
      
  Update()
  {
    this.item=new Items();
    this.item.iid=this.itemForm.value["iid"];
    this.item.categoryid=this.itemForm.value["categoryid"];
    this.item.subcategoryid=this.itemForm.value["subcategoryid"];
    this.item.price=Number(this.itemForm.value["price"]);
    this.item.itemname=this.itemForm.value["itemname"];
    this.item.description=this.itemForm.value["description"];
    this.item.stocknumber=(this.itemForm.value["stocknumber"]);
    this.item.remarks=this.itemForm.value["remarks"];
    this.item.sid=this.sid;
    this.item.image=this.image;
   console.log(this.item);
    this.service.UpdateItem(this.item).subscribe(res=>
      {
        console.log('record updated')
      })
  }

  Delete(iid:string):void{
   
    this.service.DeleteItem(iid).subscribe(res=>{
      console.log('Record deleted');
      },
    err=>{
      console.log(err);
    })
  }
  ViewItems():void{
    let sid=localStorage.getItem('sid');
    this.service.ViewItems(sid).subscribe(res=>
      {
        this.list=res;
    
        console.log(this.list)
      },
      err=>{
        console.log(err)
      })
    }
onReset() {
  this.submitted = false;
  this.itemForm.reset();
}
}