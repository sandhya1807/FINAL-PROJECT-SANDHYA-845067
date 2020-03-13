import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/Model/sub-category';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  submitted=false;
  list:SubCategory;
  item:SubCategory;
  addSubcategoryform: FormGroup;

  constructor(private builder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.addSubcategoryform=this.builder.group({
      subcategoryname:['',Validators.required],
      categoryid:['',Validators.required],
      briefdetails:['',Validators.required],
      gst:['',Validators.required]
      
    });
  }
  get f() { return this.addSubcategoryform.controls; }

  onSubmit() {
      this.submitted = true;
      this.Add();
  }

  onReset() {
      this.submitted = false;
      this.addSubcategoryform.reset();
  }

  Add()
  {
     this.item=new SubCategory();
     this.item.subcategoryid=Math.floor(Math.random()*1000);
     this.item.subcategoryname=this.addSubcategoryform.value["subcategoryname"];
     this.item.categoryid=Number(this.addSubcategoryform.value["categoryid"]);
          this.item.gst=Number(this.addSubcategoryform.value["gst"]);
     console.log(this.item);
     this.service.AddSubCategory(this.item).subscribe(res=>{
       console.log('Record Added')
     },erros=>{
       console.log(erros)
     })
  }

Delete()
{   let id=this.addSubcategoryform.value["subcategoryid"];
   this.service.DeleteSubCategory(id).subscribe(res=>{
     console.log('record deleted');
 })
}
}
