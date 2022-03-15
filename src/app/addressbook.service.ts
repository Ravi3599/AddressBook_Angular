import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { AddressBook } from './Model/AddressBook';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {

  constructor(private _http:HttpClient) { }

  insertAddressBook(addressbook:any){
    return this._http.post("http://localhost:8080/addressbookservice/insert",addressbook);
  }
  getAddressBook(){
    return this._http.get("http://localhost:8080/addressbookservice/retrieve");
  }
  getAddressBookById(Id:number){
    return this._http.get("http://localhost:8080/addressbookservice/get/"+Id);
  }
  updateAddressBookById(Id:number,addressbook:any){
    return this._http.put("http://localhost:8080/addressbookservice/update/"+Id,addressbook);
  }
  deleteAddressBookById(Id:number){
    return this._http.delete("http://localhost:8080/addressbookservice/delete/"+Id);
  }
  searchByFirstName(firstName:any){
    return this._http.get("http://localhost:8080/addressbookservice/getByFirstName/"+firstName)
  }
  searchByCity(city:any){
    return this._http.get("http://localhost:8080/addressbookservice/getByCity/"+city)
  }
  searchByPhoneNumber(number:any){
    return this._http.get("http://localhost:8080/addressbookservice/getByPhoneNumber/"+number)
  }
  sortByCityAsc(){
    return this._http.get("http://localhost:8080/addressbookservice/sortByCityAsc");
  }
  sortByCityDesc(){
    return this._http.get("http://localhost:8080/addressbookservice/sortByCityDesc");
  }
  sortByFirstNameAsc(){
    return this._http.get("http://localhost:8080/addressbookservice/sortByFirstNameAsc");
  }

}
