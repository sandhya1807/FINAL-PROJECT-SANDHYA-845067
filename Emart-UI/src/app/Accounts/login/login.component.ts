import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Buyer } from 'src/app/model/buyer';
import { Seller } from 'src/app/Model/seller';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';
import { Token } from 'src/app/model/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
login:FormGroup;
submitted:boolean=false;
username: string;
password: string;
errmsg:string;
buyer:Buyer;
seller:Seller;
role:any;
token:Token;

constructor(private form:FormBuilder,private service:UserService,private route:Router) { }

ngOnInit() {
  this.login=this.form.group({ 
  username:['',Validators.required],
  password:['',Validators.required],
  role:['']
    });
  }

onSubmit(){
    this.submitted=true;
    }

public Validate()
{
  let username=this.login.value['username'];
  let password=this.login.value['password'];
  let role=this.login.value['role'];
    if(role=='buyer')
{
  let token=new Token();
  this.service.BuyerLogin(username,password).subscribe(res=>{
  token=res;
  console.log(token)
  console.log(token.bid);
  if(token.message=="success"){
    localStorage.setItem('token',token.token)
    localStorage.setItem("bid",String(token.bid));
    this.route.navigateByUrl("buyerlandingpage")
  }
  else{
    alert("inavlid");
  }
});
}
  if(role=='seller')
  {
  let token=new Token();
  this.service.SellerLogin(username,password).subscribe(res=>{token=res;console.log(token)
  if(token.message=="success"){
    localStorage.setItem('token',token.token)
    localStorage.setItem("sid",String(token.sid));
    this.route.navigateByUrl("sellerlandingpage")
  }
  else{
    alert("inavlid");
  }
});
}
if(username=="Admin" && password=="admin")
{
  this.route.navigateByUrl("adminlandingpage");
 }
}

Navigate()
{
  switch(this.role){
    case "buyer":
      this.route.navigateByUrl("buyerlandingpage");
      break;
      case "seller":
      this.route.navigateByUrl("sellerlandingpage");
      break;
      case "admin":
      this.route.navigateByUrl("adminlandingpage");
      break;
      default:
      alert("invalid credentials");
}
}
}
