import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';
import { CustomersService } from 'src/app/shared/services/customers.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerForm: FormGroup;
  customers: Customer[];
  showNewRow: boolean = false;
  submitted = false;

  constructor(private customerService: CustomersService) { }

  // convenience getter for easy access to form fields
  get f() { return this.customerForm.controls; }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
    this.initializeCustomerForm();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.customers, event.previousIndex, event.currentIndex);
  }

  onRemove(customer: Customer) {
    const index = this.customers.findIndex(cust => cust.id === customer.id);
    this.customers.splice(index, 1);
  }

  onAdd() {
    if (!this.showNewRow) {
      // initialize only when row is hidden
      this.initializeCustomerForm();
      this.submitted = false;
    }
    this.showNewRow = true;
  }

  onCancel() {
    this.showNewRow = false;
  }

  onSubmit() {
    this.submitted = true;

    if (!this.customerForm.valid) {
      return;
    }

    this.customers.push(this.customerForm.value);
    this.showNewRow = false;
  }

  private getNextCustomerId(): number {
    const customerIds = this.customers.map(c => c.id);
    return Math.max(...customerIds) + 1;
  }

  private initializeCustomerForm(): void {
    this.customerForm = new FormGroup({
      id: new FormControl(this.getNextCustomerId()),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
}
