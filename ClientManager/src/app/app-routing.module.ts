import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { AddclientComponent } from './addclient/addclient.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { ClientprojectsComponent } from './clientprojects/clientprojects.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { AuthGuard } from './auth-guard.service';
import { MissingpdfComponent } from './missingpdf/missingpdf.component';
import { LogoutpageComponent } from './logoutpage/logoutpage.component';

const routes: Routes = [{path: '', component: HomepageComponent},
{path: 'login', component: LoginpageComponent},
{path: 'clients', component: ClientlistComponent, canActivate: [AuthGuard]},
{path: 'clients/add', component: AddclientComponent, canActivate: [AuthGuard]},
{path: 'clients/update', component: UpdateclientComponent, canActivate: [AuthGuard]},
{path: 'clients/projects', component: ClientprojectsComponent, canActivate: [AuthGuard]},
{path: 'clients/projects/add', component: AddprojectComponent, canActivate: [AuthGuard]},
{path: 'clients/projects/update', component: UpdateprojectComponent, canActivate: [AuthGuard]},
{path: 'clients/pdf', component: MissingpdfComponent, canActivate: [AuthGuard]},
{path: 'logout', component: LogoutpageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
