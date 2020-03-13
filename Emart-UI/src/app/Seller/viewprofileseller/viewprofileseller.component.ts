import { Component, OnInit } from '@angular/core';
import{Items} from'src/app/model/items';
import { FormBuilder,FormGroup } from '@angular/forms';
import { SellerService } from 'src/app/service/seller.service';
 import { Seller } from 'src/app/Model/seller';

@Component({
  selector: 'app-viewprofileseller',
  templateUrl: './viewprofileseller.component.html',
  styleUrls: ['./viewprofileseller.component.css']
})
export class ViewprofilesellerComponent implements OnInit {
  editform:FormGroup;
  submitted:false;
  seller:Seller;
  list:Seller[];

  constructor(private formbuilder:FormBuilder,private service:SellerService) {
    this.editform=this.formbuilder.group({
      
      susername:[''],
      companyname:[''],
      gstin:[''],
      brief:[''],
      address:[''],
          emailid:[''],
          mobile:['']
    });
   }

  ngOnInit() {
    
    this.viewprofile();
  }
  
  viewprofile()
  {
      let id=localStorage.getItem("sid")
      this.service.GetProfile(id).subscribe(res=>{this.seller=res;
      console.log(this.seller)
      this.editform.setValue({
        // sid:this.seller.sid,
        susername:this.seller.susername,
        companyname:this.seller.companyname,
        brief:this.seller.brief,
        address:this.seller.address,
        emailid:this.seller.emailid,
        mobile:this.seller.mobile,
        gstin:this.seller.gstin
      })
    });
  }
  get f(){return this.editform.controls;}
  onSubmit()
  {
    this.submitted=false;
    if(this.editform.valid)
    {
      
      this.seller.susername=this.editform.value["susername"];
      this.seller.emailid=this.editform.value["emailid"];
      this.seller.mobile=this.editform.value["mobile"];
      this.seller.companyname=this.editform.value["companyname"];
      this.seller.brief=this.editform.value["brief"];
      this.seller.address=this.editform.value["address"];
      this.seller.gstin=this.editform.value["gstin"];
      console.log(this.seller)
      this.service.EditProfile(this.seller).subscribe(res=>
        {
          console.log('Updated succesfully');
        },err=>{console.log(err)}
  
        )
     }
  }
}

 