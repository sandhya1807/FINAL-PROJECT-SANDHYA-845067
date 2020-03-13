import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{BuyerService} from 'src/app/service/buyer.service';
import{Buyer} from 'src/app/model/buyer';

@Component({
  selector: 'app-buyer-edit-profile',
  templateUrl: './buyer-edit-profile.component.html',
  styleUrls: ['./buyer-edit-profile.component.css']
})
export class BuyerEditProfileComponent implements OnInit {
  EditProfileForm: FormGroup;
  submitted = false;
  buyer:Buyer;
  list:Buyer[];

  constructor(private formBuilder: FormBuilder,private service:BuyerService) {
    this.EditProfileForm=this.formBuilder.group({
      busername:[''],
      emailid:[''],
      mobile:['']
});
}

ngOnInit() {
this.GetProfile();
 }
        
 GetProfile()
  {
      let id=localStorage.getItem("bid")
      this.service.GetProfile(id).subscribe(res=>{this.buyer=res;
      console.log(this.buyer)
      this.EditProfileForm.setValue({
      busername:this.buyer.busername,
      emailid:this.buyer.emailid,
      mobile:this.buyer.mobile,
    })
    });
   }
  get f() { return this.EditProfileForm.controls; }

  onSubmit() {
   this.submitted = false;
   if (this.EditProfileForm.valid) {
    this.buyer.busername=this.EditProfileForm.value["busername"];
    this.buyer.emailid=this.EditProfileForm.value["emailid"];
    this.buyer.mobile=this.EditProfileForm.value["mobile"]
    console.log(this.buyer)
    this.service.EditProfile(this.buyer).subscribe(res=>
    {
    console.log('Updated succesfully');
    },err=>{console.log(err)}
    )
  }
}
}
