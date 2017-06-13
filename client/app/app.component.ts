import { Component } from '@angular/core';
import {AuthService} from './services/auth.service'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'login.html',
  providers:[AuthService]
})

export class AppComponent { }
