import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewRepositsComponent } from './Seller/view-reposits/view-reposits.component';
import{ViewprofilesellerComponent}from './Seller/viewprofileseller/viewprofileseller.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PaymentComponent } from './Buyer/payment/payment.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { BlockunblockBuyerComponent } from './Admin/blockunblock-buyer/blockunblock-buyer.component';
import { BlockunblocksellerComponent } from './Admin/blockunblockseller/blockunblockseller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Accounts/login/login.component';
import { RegisterbuyerComponent } from './Accounts/registerbuyer/registerbuyer.component';
import { RegisterSellerComponent } from './Accounts/registerseller/registerseller.component';
import { ByProductComponent } from './Buyer/by-product/by-product.component';
import { HomeComponent } from './Accounts/home/home.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { BuyerEditProfileComponent } from './Buyer/buyer-edit-profile/buyer-edit-profile.component';
import {HttpClientModule} from '@angular/common/http';
import{UserService} from './service/user.service';
import { ViewCategoryComponent } from './Admin/view-category/view-category.component';
import { ViewSubCategoryComponent } from './Admin/view-sub-category/view-sub-category.component';
import { AdminService } from './service/admin.service';
import { BuyerService } from './service/buyer.service';
import { SellerService } from './service/seller.service';

@NgModule({
    declarations: [
    AppComponent,
    ServicesComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewRepositsComponent,
    ViewprofilesellerComponent,
    SearchComponent,
    ViewCartComponent,
        AdminLandingPageComponent,
    BlockunblockBuyerComponent,
    BlockunblocksellerComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    DailyReportsComponent,
    LoginComponent,
    RegisterbuyerComponent,
    RegisterSellerComponent,
    ByProductComponent,
    HomeComponent,
    SellerLandingPageComponent,
    BuyerLandingPageComponent,
    BuyerEditProfileComponent,
      
    ViewCategoryComponent,
    ViewSubCategoryComponent,
    PaymentComponent,
    
  ],
imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
],
  providers: [UserService,AdminService,BuyerService,SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
