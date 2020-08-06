import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;

  forma = FormGroup;
  login = FormControl;
  password = FormControl;

  constructor() {
    this.login = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.forma = new FormGroup({
   login: this.login,
      password: this.password
});
  }

  save(value): void {
    this.user = this.forma.controls.login.value;
    this.user = this.forma.controls.password.value;
    console.log(value.value);
  }
}
