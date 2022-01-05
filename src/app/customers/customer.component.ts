import { Component } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'customer-ui',
  templateUrl: './customer.component.html',
})
export class CustomerComponent {
    customerObj : Customer = new Customer();

    customers : Array<Customer> = new Array<Customer>();
    
    constructor() {
        this.customerObj.CustomerId = "501";
        this.customerObj.CustomerName = "Alpha";
        this.customerObj.CustomerAmount = 1111;
        this.customers.push(this.customerObj);
        this.customerObj = new Customer();
    }

    add(){
        this.customers.push(this.customerObj);
        this.customerObj = new Customer();
    }

    selectRow(selectedCustomer: Customer){
        // we will clone and then assign
        this.customerObj = Object.assign({}, selectedCustomer);
    }

    update() {
        for (let customer of this.customers){
            if (this.customerObj.CustomerId == customer.CustomerId){
                customer.CustomerName = this.customerObj.CustomerName;
                customer.CustomerAmount = this.customerObj.CustomerAmount;
            }
        }
    }

    clear() {
        this.customerObj = new Customer();
    }
}
