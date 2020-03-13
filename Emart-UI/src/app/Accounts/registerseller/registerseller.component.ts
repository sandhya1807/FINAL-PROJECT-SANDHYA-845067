import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import{UserService} from 'src/app/service/user.service';
import { Seller } from 'src/app/model/seller';

@Component({
  selector: 'app-registerseller',
  templateUrl: './registerseller.component.html',
  styleUrls: ['./registerseller.component.css']
})

export class RegisterSellerComponent implements OnInit {
registerForm:FormGroup;
submitted:boolean;
list:Seller[];
seller:Seller;
Sid:number;
    susername:string;
    password:string;
    companyname:string;
    gstin:number;
    briefaboutcomapny:string;
    address:string;
    emailid:string;
    mobile:number;
    website:string;

  constructor(private formbuilder:FormBuilder,private service:UserService) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      Sid:['',Validators.required],
      susername:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
      companyname:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      Gstin:['',[Validators.required]],
      website:['',[Validators.required]],
      brief:['',[Validators.required]],
      address:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      acceptTerms:[false,Validators.requiredTrue]
    })
  }

  get f(){
    return this.registerForm.controls;
  }

onSubmit(){
this.submitted=true;
  if(this.registerForm.valid){
this.seller=new Seller();
this.seller.Sid=this.registerForm.value["Sid"]; 
this.seller.susername=this.registerForm.value["susername"];
this.seller.password=this.registerForm.value["password"];
this.seller.companyname=this.registerForm.value["companyname"];
this.seller.gstin=this.registerForm.value["gstin"];
this.seller.website=this.registerForm.value["website"];
this.seller.brief=this.registerForm.value["briefaboutcompany"];
this.seller.address=this.registerForm.value["address"];
this.seller.emailid=this.registerForm.value["emailid"];
this.seller.mobile=this.registerForm.value["mobile"];
this.service.Sellerregister(this.seller).subscribe(res=>{
  console.log("record added")
},err=>{
  console.log(err)
})
    alert("register success");
    console.log(JSON.stringify(this.registerForm.value)); 
  }
  else 
  alert("invalid details")
}

onReset(){
  this.submitted=false;
  this.registerForm.reset();
}
}
