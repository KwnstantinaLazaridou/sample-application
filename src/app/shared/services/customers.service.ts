import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  users: Customer[] = [
    { id: 1, firstName: "John", lastName: "Constantine", number: "213123123", email: "const@website.com" },
    { id: 2, firstName: "Thomas", lastName: "Anderson", number: "232654765", email: "neo@matrix.com" },
    { id: 3, firstName: "John", lastName: "Wick", number: "211877964", email: "john@wick.com" }
  ];

  constructor() { }

  getCustomers(): Customer[] {
    return this.users;
  }
}
