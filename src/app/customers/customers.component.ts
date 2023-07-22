import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import {FormBuilder,FormGroup}  from '@angular/forms' ;
import { Customer } from '../model/customer';
import { Observable,catchError,throwError } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
customers!: Observable<Customer[]>
errMessage:string |undefined;
customerSearc!:FormGroup;
  constructor(private customerService:CustomerService,  private fb:FormBuilder){}
  ngOnInit(): void {
   this.customerSearc= this.fb.group({
          search:this.fb.control("")
   })
    this.customers= this.customerService.getCustomers().pipe(
      catchError(err=>{
        this.errMessage=err.message;
        return throwError(err)
      })
    )
    ;
  }
/**
 *  this.customerService.getCustomers().subscribe({
      next: data=>{
        this.customers=data
      },
      error: e=>{
        this.errMessage=e.message;
      }
      
  
    }
    )
 */
searchCustomer(keyword:string){
  this.customerService.searchCustomers(keyword).pipe(
    catchError(err=>{
      this.errMessage= err.message
     return throwError(err)
    })
   
  )
}
handleSubmit(){
  
}
}
