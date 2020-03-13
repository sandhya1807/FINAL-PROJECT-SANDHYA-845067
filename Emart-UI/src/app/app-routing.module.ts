import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Accounts/login/login.component';
import { RegisterbuyerComponent } from './Accounts/registerbuyer/registerbuyer.component';
import {RegisterSellerComponent} from './Accounts/registerseller/registerseller.component';
import { HomeComponent } from './Accounts/home/home.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';

import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewRepositsComponent } from './Seller/view-reposits/view-reposits.component';
import{ViewprofilesellerComponent} from'./Seller/viewprofileseller/viewprofileseller.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';

import { ByProductComponent } from './Buyer/by-product/by-product.component';
import{BuyerLandingPageComponent} from'./Buyer/buyer-landing-page/buyer-landing-page.component';
import { BuyerEditProfileComponent } from './Buyer/buyer-edit-profile/buyer-edit-profile.component';

import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { BlockunblocksellerComponent } from './Admin/blockunblockseller/blockunblockseller.component';
import { BlockunblockBuyerComponent } from './Admin/blockunblock-buyer/blockunblock-buyer.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import{ViewCategoryComponent} from './Admin/view-category/view-category.component';
import{ViewSubCategoryComponent} from './Admin/view-sub-category/view-sub-category.component';
import { PaymentComponent } from './Buyer/payment/payment.component';

const routes: Routes = [
   {path:'sellerlandingpage',component:SellerLandingPageComponent,children:
   [{path:'additems',component:AddItemsComponent},
   {path:'viewitems',component:ViewItemsComponent},
   {path:'ViewProfileSeller',component:ViewprofilesellerComponent},
      {path:'viewreposits',component:ViewRepositsComponent}]},
  
  {path:'buyerlandingpage',component:BuyerLandingPageComponent,children:
  [{path:'byproduct',component:ByProductComponent},
    {path:'search',component:SearchComponent},
  {path:'viewcart',component:ViewCartComponent},
  {path:'payment',component:PaymentComponent},
  
  {path:'buyer-edit-profile',component:BuyerEditProfileComponent}]},
 
    {path:'adminlandingpage',component:AdminLandingPageComponent,children:
    [{path:'addcategory',component:AddCategoryComponent},
    {path:'addsubcategory',component:AddSubCategoryComponent},
    {path:'dailyreports',component:DailyReportsComponent},
    {path:'blockunblockBuyer',component:BlockunblockBuyerComponent},
    {path:'blockunblockseller',component:BlockunblocksellerComponent},
    {path:'viewcategory',component:ViewCategoryComponent},
    {path:'viewsubcategory',component:ViewSubCategoryComponent}]},

     {path:'home',component:HomeComponent,children:
     [{path:'login',component:LoginComponent},
     {path:'registerbuyer',component:RegisterbuyerComponent},
     {path:'registerseller',component:RegisterSellerComponent},
    ]},
     {path:'',component:HomeComponent}
]
   
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  