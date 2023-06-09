import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './Adminlogin/Adminlogin.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Add_userComponent } from './add_user/add_user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './login/user.service';
import { DoctorComponent } from './doctor_list/doctor_list.component';
import { DrService } from './doctor_list/dr.service';
import { Add_drComponent } from './add_dr/add_dr.component';
import { ProductComponent } from './product_list/product_list.component';
import { ProductService } from './product_list/product.service';
import { Add_productComponent } from './add_product/add_product.component';
import { AddUserService } from './add_user/adduser.service';
import { AddDRService } from './add_dr/adddr.service';
import { AddProductService } from './add_product/add_product.service';
import { Edit_userComponent } from './edit_user/edit_user.component';
import { EditUserService } from './edit_user/edit_user.service';
import { Edit_productComponent } from './edit_product/edit_product.component';
import { EditProductService } from './edit_product/edit_product.service';
import { MRloginComponent } from './MRlogin/MRlogin.component';
import { MRloginService } from './MRlogin/MRlogin.service';
import { UserHomeComponent } from './user_home/user_home.component';
import { GetProductService } from './user_home/user_home.component.service';
import { ProductDetailsComponent } from './product_details/product_details.component';
import { ProductDetailsService } from './product_details/product_details.component.service';
import { AllopathicComponent } from './allopathic/allopathic.component';
import { AllopathicService } from './allopathic/allopathic.component.service';
import { HomoeopathyComponent } from './homoeopathy/homoeopathy.component';
import { HomoeopathyService } from './homoeopathy/homoeopathy.component.service';
import { AyurvedicComponent } from './ayurvedic/ayurvedic.component';
import { AyurvedicService } from './ayurvedic/ayurvedic.component.service';
import { SearchProductService } from './SearchProduct/SearchProduct.component.service';
import { SearchProductComponent } from './SearchProduct/SearchProduct.component';
// import { CartComponent } from './ Cart/Cart.component';
// import { CartService } from './ Cart/Cart.component.service';
import { CartComponent } from './Cart/Cart.component';
import { CartService } from './Cart/Cart.component.service';
import { MRRegisterComponent } from './MRRegister/MRRegister.component';
import { MRRegisterService } from './MRRegister/MRRegister.service';
import { CartProductDetailsComponent } from './CartProductDetails/CartProductDetails.component';
import { CartProductDetailsService } from './CartProductDetails/CartProductDetails.component.service';
import { UserOrdersComponent } from './UserOrders/UserOrders.component';
import { UserOrdersService } from './UserOrders/UserOrders.component.service';
import { UserOrderListComponent } from './UserOrderList/UserOrderList.component';
import { UserOrderListService } from './UserOrderList/UserOrderList.service';
import { AllOrderListService } from './AllOrderList/AllOrderList.service';
import { AllOrderListComponent } from './AllOrderList/AllOrderList.component';
import { MROrderListComponent } from './MRorders/MRorders.component';
import { MRordersListService } from './MRorders/MRorders.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ConsultDoctorComponent } from './consult-doctor/consult-doctor.component';
import { AddConsultationService } from './consult-doctor/consult-doctor.service';
import { ContactUsService } from './contact-us/contact-us.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { SingleUserService } from './user-profile/user.service';
import { ConsultationRequestsComponent } from './consultation-requests/consultation-requests.component';
import { AdminConsultRequestComponent } from './admin-consult-request/admin-consult-request.component';
import { UserQueriesComponent } from './user-queries/user-queries.component';
import { UserConsultationRequestsService } from './consultation-requests/consultation-requests.service';
import { AdminConsultationRequestsService } from './admin-consult-request/admin-consult-request.service';
import { UserQueriesService } from './user-queries/user-queries.service';
import { UserEmailService } from './forgot-password/forgot-password.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { FormControl } from '@angular/forms';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailsService } from './order-details/order-details.service';

const routes: Route[] = [

  { path: '', redirectTo: '/MRlogin/home', pathMatch: 'full' },

  // the default component
  // { path: '', component: AdminloginComponent },

  { path: 'login', component: AdminloginComponent },
  { path: 'login/dashboard', component: DashboardComponent },

  { path: 'login/dashboard/user', component: LoginComponent },
  { path: 'login/dashboard/drs', component: DoctorComponent },
  { path: 'login/dashboard/product', component: ProductComponent },

  { path: 'login/dashboard/user/add_user', component: Add_userComponent },
  { path: 'login/dashboard/drs/add_dr', component: Add_drComponent },
  { path: 'login/dashboard/product/add_product', component: Add_productComponent },

  { path: 'login/dashboard/user/edit_user/:id', component: Edit_userComponent },
  { path: 'login/dashboard/product/edit_product/:id', component: Edit_productComponent },
  { path: 'login/dashboard/admin-consult-request', component: AdminConsultRequestComponent},
  { path: "login/dashboard/user-queries", component: UserQueriesComponent},

  { path: 'MRlogin/home', component: UserHomeComponent, canActivate: [AppComponent] },


  { path: 'MRlogin', component: MRloginComponent },
  { path: 'MRlogin/product_details/:id', component: ProductDetailsComponent },

  { path: 'MRlogin/allopathic', component: AllopathicComponent },
  { path: 'MRlogin/homoeopathy', component: HomoeopathyComponent },
  { path: 'MRlogin/ayurvedic', component: AyurvedicComponent },
  { path: 'MRlogin/search', component: SearchProductComponent },
  { path: 'MRlogin/cart', component: CartComponent },
  { path: 'MRregister', component: MRRegisterComponent },
  { path: 'MRlogin/cartEdit/:id', component: CartProductDetailsComponent },
  { path: 'MRlogin/cart/placeorder', component: UserOrdersComponent },
  { path: 'MRlogin/orders', component: UserOrderListComponent },
  { path: 'MRlogin/dashboard/orders', component: AllOrderListComponent },
  { path: 'MRlogin/dashboard/MRorders/:id', component: MROrderListComponent },
  { path: 'MRlogin/user-profile', component: UserProfileComponent },
  { path: 'MRlogin/contact_us', component: ContactUsComponent},
  { path: 'MRlogin/consult-doctor', component: ConsultDoctorComponent},
  { path: 'MRlogin/about-us', component: AboutUsComponent},
  { path: 'MRlogin/consultation-request', component: ConsultationRequestsComponent},
  { path: 'MRlogin/forgot-password', component: ForgotPasswordComponent},
  { path: 'MRlogin/OrderDetails', component: OrderDetailsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminloginComponent,
    Add_userComponent,
    DashboardComponent,
    DoctorComponent,
    Add_drComponent,
    ProductComponent,
    Add_productComponent,
    Add_drComponent,
    Edit_userComponent,
    Edit_productComponent,
    MRloginComponent,
    UserHomeComponent,
    ProductDetailsComponent,
    AllopathicComponent,
    HomoeopathyComponent,
    AyurvedicComponent,
    SearchProductComponent,
    CartComponent,
    MRRegisterComponent,
    CartProductDetailsComponent,
    UserOrdersComponent,
    UserOrderListComponent,
    AllOrderListComponent,
    MROrderListComponent,
    UserProfileComponent,
    ContactUsComponent,
    ConsultDoctorComponent,
    AboutUsComponent,
    ConsultationRequestsComponent,
    AdminConsultRequestComponent,
    UserQueriesComponent,
    ForgotPasswordComponent,
    OrderDetailsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxQRCodeModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [
    UserService,
    DrService,
    ProductService,
    AddUserService,
    AddDRService,
    AddProductService,
    EditUserService,
    EditProductService,
    MRloginService,
    AppComponent,
    GetProductService,
    ProductDetailsService,
    AllopathicService,
    HomoeopathyService,
    AyurvedicService,
    SearchProductService,
    CartService,
    MRRegisterService,
    CartProductDetailsService,
    UserOrdersService,
    UserOrderListService,
    AllOrderListService,
    MRordersListService,
    AddConsultationService,
    ContactUsService,
    SingleUserService,
    UserConsultationRequestsService,
    AdminConsultationRequestsService,
    UserQueriesService,
    UserEmailService,
    OrderDetailsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
