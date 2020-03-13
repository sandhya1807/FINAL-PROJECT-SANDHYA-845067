import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { SubCategory } from 'src/app/Model/sub-category'


@Component({
  selector: 'app-view-sub-category',
  templateUrl: './view-sub-category.component.html',
  styleUrls: ['./view-sub-category.component.css']
})
export class ViewSubCategoryComponent implements OnInit {
    subcategory:SubCategory;
  
  constructor(private service:AdminService) { }
       
  

  ngOnInit() 
  {
    this.ViewSubCategory();
 }

 DeleteSubCategory(subcategoryid:number):void{
  this.service.DeleteSubCategory(subcategoryid).subscribe(res=>{
    console.log("record deleted");
    this.ViewSubCategory();
  },
  err=>
  {
    console.log(err);
  })
}


ViewSubCategory():void
   {
    this.service.ViewSubCategories().subscribe(res=>
      {
        this.subcategory=res;
        console.log(this.subcategory)
      },err=>
      {
        console.log(err);
      })
  }
}
