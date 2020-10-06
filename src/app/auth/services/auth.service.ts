import { Injectable } from '@angular/core';
import { Constants } from '../../../app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): boolean {
    if (email === Constants.email && password === Constants.password) {
      localStorage.setItem(Constants.isLoggedInKey, "true");
      return true;
    }

    return false;
  }

  isLoggedIn(): boolean {
    const item = localStorage.getItem(Constants.isLoggedInKey);
    return item === "true";
  }

  logout() {
    localStorage.removeItem(Constants.isLoggedInKey);
  }
}
