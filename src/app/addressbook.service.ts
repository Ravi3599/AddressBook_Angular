import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { AddressBook } from './Model/AddressBook';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {

  _url="";
  constructor(private _http:HttpClient) { }

  enroll(addressbook:AddressBook){
    return this._http.post<any>(this._url,addressbook);
  }
}
