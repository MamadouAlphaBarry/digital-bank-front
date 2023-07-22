import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  public getCustomers():Observable<Customer[]>{
    //this.http.get('http://localhost:8082/api/customers').subscribe({
      return this.http.get<Customer[]>('http://localhost:8082/api/customers');
  }
  public   searchCustomers(keyword:string){
    return  this.http.get<Customer[]>('http://localhost:8082/api/customers/search?name='+keyword);
  }
}
