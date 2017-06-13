import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService{
    constructor(private http:Http){
        console.log('Auth Service Initialized...');
    }

    login(loginData){
      var headers = new Headers();
      headers.append('Content-Type','application/json');
  return  this.http.post('/api/authenticate',loginData,{headers: headers}).map(res => res.json()
    );
}

setToken(token){
  if(token){
  localStorage.setItem('token',token);
}
else{
  localStorage.removeItem('token');
}
};


getToken(){
  return localStorage.getItem('token');
};

isLoggedIn(){
    if(this.getToken())
    {
      return true;
    }
    else {
      return false;
    }
  };

logout(){
   this.setToken(null);
  };
}
