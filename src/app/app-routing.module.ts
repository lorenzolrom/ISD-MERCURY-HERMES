import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {LockRequestComponent} from "./lock-request/lock-request.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'locks', component: LockRequestComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
