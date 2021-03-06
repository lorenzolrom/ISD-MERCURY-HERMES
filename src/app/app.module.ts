import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MAT_DATE_LOCALE, MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ErrorInterceptor} from "./_interceptors/error.interceptor";
import {JwtInterceptor} from "./_interceptors/jwt.interceptor";
import { NotFoundComponent } from './not-found/not-found.component';
import { ActiveSitesComponent } from './active-sites/active-sites.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { PasswordResetComponent } from './password-reset/password-reset.component';
import {HelpDeskLandingComponent} from "./help-desk/help-desk-landing.component";
import {HelpDeskViewDialog} from "./help-desk/help-desk-view.dialog";
import {HelpDeskNewDialog} from "./help-desk/help-desk-new.dialog";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { HelpDeskUpdateDialog } from './help-desk/help-desk-update.dialog';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidenavComponent,
    LoginComponent,
    NotFoundComponent,
    ActiveSitesComponent,
    PasswordResetComponent,
    HelpDeskLandingComponent,
    HelpDeskViewDialog,
    HelpDeskNewDialog,
    HelpDeskUpdateDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatNativeDateModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
