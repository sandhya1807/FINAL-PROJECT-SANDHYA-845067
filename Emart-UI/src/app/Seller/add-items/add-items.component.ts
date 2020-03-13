import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Items} from 'src/app/model/items';
import { SellerService } from 'src/app/service/seller.service';
import{Category} from 'src/app/model/category';
import{SubCategory} from 'src/app/model/sub-category';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  additemsForm: FormGroup;
    submitted = false;
    items:Items;
    Categorylist:Category[];
    SubCategorylist:SubCategory[];
    image:string;

    constructor(private formBuilder: FormBuilder,private service:SellerService) {
      this.service.GetCategory().subscribe(res=>{
        this.Categorylist=res;
        console.log(this.Categorylist);
      })
     }
    ngOnInit() {
    this.additemsForm = this.formBuilder.group({
      
      categoryid: ['', Validators.required],
      subcategoryid: ['', [Validators.required]],
      itemname:['',[Validators.required]],
      price:['',[Validators.required]],
      stocknumber:['',[Validators.required]],
    description:['',[Validators.required]],
    sid:['',[Validators.required]],
    remarks:['',[Validators.required]],
    image:['']
      });
}
get f() { return this.additemsForm.controls; }

onGetSubCategory()
{
let categoryid=this.additemsForm.value["categoryid"];
console.log(categoryid);
this.service.GetSubCategory(categoryid).subscribe(res=>{
  this.SubCategorylist=res;
  console.log(this.SubCategorylist);
})
}
onSubmit() {
  this.submitted = true;
     if (this.additemsForm.valid) {
    this.items=new Items();
    this.items.iid='I'+Math.floor(Math.random()*100);
    this.items.categoryid=Number(this.additemsForm.value["categoryid"]),
    this.items. subcategoryid=Number(this.additemsForm.value["subcategoryid"]),
    this.items.itemname=(this.additemsForm.value["itemname"]),
    this.items.price=(this.additemsForm.value["price"]),
    this.items.stocknumber=(this.additemsForm.value["stocknumber"]),
    this.items.description=(this.additemsForm.value["description"]),
    this.items.sid=(this.additemsForm.value["sid"]),
    this.items.remarks=(this.additemsForm.value["remarks"]),
    this.items.image=this.image;
    console.log(this.items);
    this.service.AddItem(this.items).subscribe(res=>{
      console.log('items added');
    },err=>{
      console.log(err);
    })
      alert('SUCCESS!! :-)\n\n') 
    }
}
fileEvent(event){
  this.image=event.target.files[0].name;
}

onReset() {
  this.submitted = false;
  this.additemsForm.reset();
}
}
 
