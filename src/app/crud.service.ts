import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient
  ) { }

base_url= 'https://www.scert-up.in/api/GetEbookApi'

  get_book(){
    return  this.http.get(`${this.base_url}`)
  }
}
