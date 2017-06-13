import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
   errorMsg = null;
   successMsg = null;
   username = null;
   password = null;
   loginData = {
     username: this.username,
     password: this.password
   };

    constructor(private authService:AuthService){

    }

    Login(event){
     event.preventDefault();
     this.loginData.username = this.username;
     this.loginData.password = this.password;
     this.authService.login(this.loginData).subscribe(data => {
       if(data.success)
       {
        this.authService.setToken(data.token);
         this.successMsg=data.message + '...redirecting to profile page';
         this.username = null;
         this.password = null;
         this.errorMsg = null;
       }
       else {
         this.successMsg = null;
         this.errorMsg=data.message;
       }
     });

};

}
