import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRequesterComponent } from './create-requester/create-requester.component';
import { RequesterDetailsComponent } from './requester-details/requester-details.component';
import { RequesterListComponent } from './requester-list/requester-list.component';
import { UpdateRequesterComponent } from './update-requester/update-requester.component';
import { LoginComponent } from './login/login.component';

import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorService } from './httpInterceptor.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRequesterComponent,
    RequesterDetailsComponent,
    RequesterListComponent,
    UpdateRequesterComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }