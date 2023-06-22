import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { UpdateComponent } from './pages/update/update.component';
import { AllusersComponent } from './pages/allusers/allusers.component';
import { RootComponent } from './pages/root/root.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminregComponent } from './pages/adminreg/adminreg.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "user/:id",
    component: UserComponent
  },
  {
    path: "update/:id",
    component: UpdateComponent
  },
  {
    path: "admin/allusers",
    component: AllusersComponent
  },
  {
    path: "",
    component: RootComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "admin/register",
    component: AdminregComponent
  },
  {
    path: "admin/login",
    component: AdminloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
