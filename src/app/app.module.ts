import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskListComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
