import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(private _router: Router){}

  password = {
    pass: ''
  }
  email = {
    name: ''
  }

  onSubmit(): void{
    if(this.email.name == "admin@gmail.com" && this.password.pass == "Admin"){
      sessionStorage.setItem('loggedin', 'true');
      this._router.navigateByUrl('/clients');
    }
  }
}
