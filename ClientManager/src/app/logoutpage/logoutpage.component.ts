import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutpage',
  templateUrl: './logoutpage.component.html',
  styleUrls: ['./logoutpage.component.css']
})
export class LogoutpageComponent {
  constructor(private _router: Router){}


  public logout(): void{
    sessionStorage.setItem('loggedin', 'false');
    this._router.navigateByUrl('');
  }
}
