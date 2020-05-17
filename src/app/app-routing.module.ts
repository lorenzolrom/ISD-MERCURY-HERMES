import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ActiveSitesComponent} from "./active-sites/active-sites.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";

const routes: Routes = [
  {path: '', component: MenuComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'passwordReset', component: PasswordResetComponent},
  {path: 'activeSites', component: ActiveSitesComponent},
  {path: '**', component: NotFoundComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
