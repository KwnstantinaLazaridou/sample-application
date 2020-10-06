import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string = '';
  loginForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.initLoginForm();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onLogin(event: Event): void {
    this.errorMsg = '';
    this.submitted = true;

    if (!this.loginForm.valid) {
      // form is not valid, exit
      return;
    }

    const isLoggedIn = this.authService.login(
      this.loginForm.get('email').value,
      this.loginForm.get('password').value
    );

    if (isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
    else {
      this.errorMsg = "Invalid credentials";
    }
  }

  private initLoginForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]) // An assumption that the password cannot be less than 4 digits
    });
  }

}