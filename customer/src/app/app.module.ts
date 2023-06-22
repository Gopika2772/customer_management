import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { UpdateComponent } from './pages/update/update.component';
import { AllusersComponent } from './pages/allusers/allusers.component';
import { RootComponent } from './pages/root/root.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminregComponent } from './pages/adminreg/adminreg.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    UpdateComponent,
    AllusersComponent,
    RootComponent,
    RegisterComponent,
    AdminregComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
