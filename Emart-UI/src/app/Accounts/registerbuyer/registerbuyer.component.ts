 import { Component, OnInit } from '@angular/core';
 import {FormBuilder,FormGroup,Validators} from '@angular/forms';
 import { UserService } from 'src/app/service/user.service';
import { Buyer } from 'src/app/model/buyer';

 @Component({
  selector: 'app-registerbuyer',
   templateUrl: './registerbuyer.component.html',
   styleUrls: ['./registerbuyer.component.css']
 })

 export class RegisterbuyerComponent implements OnInit {
   registerForm:FormGroup;
   submitted:boolean;
   list:Buyer[];
   buyer:Buyer;
   Bid:number;
    Busername:string;
    password:string;
    emailid:string;
    mobile:string;
    createddatetime:Date;
   constructor(private formbuilder:FormBuilder,private service:UserService) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      Bid:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
      Busername:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]{1}$')]],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      createddatetime:['',[Validators.required]],
      acceptTerms:[false,Validators.requiredTrue]
    })
  }

  get f(){
    return this.registerForm.controls;
      }

onSubmit()
{
    this.submitted=true;
    if(this.registerForm.valid){
    this.buyer=new Buyer();
    this.buyer.bid=this.registerForm.value["Bid"];
    this.buyer.busername=this.registerForm.value["Busername"];
    this.buyer.password=this.registerForm.value["password"];
    this.buyer.emailid=this.registerForm.value["emailid"];
    this.buyer.mobile=this.registerForm.value["mobile"];
    this.buyer.createddatetime=this.registerForm.value["createddatetime"];
    this.service.buyerregister(this.buyer).subscribe(res=>{
      console.log("record added")
    },err=>{
      console.log(err)
    })
     alert("register successful")
    console.log(JSON.stringify(this.registerForm.value));  
  }
}

onReset(){
  this.submitted=false;
  this.registerForm.reset();
}
}
