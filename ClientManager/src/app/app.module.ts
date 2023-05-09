import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddclientComponent } from './addclient/addclient.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientprojectsComponent } from './clientprojects/clientprojects.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProjectdescComponent } from './projectdesc/projectdesc.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { TologinbuttonComponent } from './tologinbutton/tologinbutton.component';
import { MissingpdfComponent } from './missingpdf/missingpdf.component';
import { LogoutpageComponent } from './logoutpage/logoutpage.component';

@NgModule({
  declarations: [
    AppComponent,
    AddclientComponent,
    AddprojectComponent,
    ClientlistComponent,
    ClientprojectsComponent,
    HomepageComponent,
    LoginpageComponent,
    ProjectdescComponent,
    UpdateclientComponent,
    UpdateprojectComponent,
    TologinbuttonComponent,
    MissingpdfComponent,
    LogoutpageComponent
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
