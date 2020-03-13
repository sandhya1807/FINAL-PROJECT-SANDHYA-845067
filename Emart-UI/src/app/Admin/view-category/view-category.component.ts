import { Component, OnInit } from '@angular/core';
import{Category} from 'src/app/model/category';
import{AdminService} from 'src/app/service/admin.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  category:Category[];
  
  
  constructor(private service:AdminService) { }

  ngOnInit() {
    this.ViewCategories();
  }
  DeleteCategory(categoryid:number):void{
    this.service.DeleteCategory(categoryid).subscribe(res=>{
      console.log("record deleted");
      this.ViewCategories();
    },
    err=>
    {
      console.log(err);
    })
  }
  ViewCategories():void
   {
    this.service.ViewCategories().subscribe(res=>
      {
        this.category=res;
        console.log(this.category)
      },err=>
      {
        console.log(err);
      })
  }
}


