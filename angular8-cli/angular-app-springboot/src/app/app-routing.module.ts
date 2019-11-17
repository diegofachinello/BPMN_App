import { RequesterDetailsComponent } from './requester-details/requester-details.component';
import { CreateRequesterComponent } from './create-requester/create-requester.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequesterListComponent } from './requester-list/requester-list.component';
import { UpdateRequesterComponent } from './update-requester/update-requester.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  { path: '', redirectTo: 'requester', pathMatch: 'full' },
  { path: 'request', component: RequesterListComponent },
  { path: 'add', component: CreateRequesterComponent },
  { path: 'update/:id', component: UpdateRequesterComponent },
  { path: 'details/:id', component: RequesterDetailsComponent },
  {path: 'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }