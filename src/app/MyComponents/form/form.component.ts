import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { AddressbookService } from 'src/app/addressbook.service';
import { AddressBook } from 'src/app/Model/AddressBook';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  Id:any=this.route.snapshot.paramMap.get('Id')
  constructor(private router:Router,private _service:AddressbookService,private route:ActivatedRoute) { }

  submitted=false;
  title:string="Person Address Form";
  cityHasError=true;
  stateHasError=true;
  addressbook:AddressBook = new AddressBook('','','','','','',0,0);

  ngOnInit(): void {
    this._service.getAddressBookById(this.Id).subscribe((getData:any)=>{
      console.log(getData.data);
      this.addressbook=getData.data;
      this.addressbook.firstName=getData.data.firstName;
      this.addressbook.lastName=getData.data.lastName;
      this.addressbook.email=getData.data.email;
      this.addressbook.address=getData.data.address;
      this.addressbook.city=getData.data.city;
      this.addressbook.state=getData.data.state;
      this.addressbook.zip=getData.data.zip;
      this.addressbook.phoneNumber=getData.data.phoneNumber;
    })
  }
  onDashboard(){
      this.router.navigate(["dashboard"]);
  }
  validateCity(value:any){
    if(value=='default'){
      this.cityHasError=true;
    }
    else{
      this.cityHasError=false;
    }
  }
  validateState(value:any){
    if(value=='default'){
      this.stateHasError=true;
    }
    else{
      this.stateHasError=false;
    }
  }
  onAddContact(){
    this.submitted=true;
    console.log(this.addressbook);
    this._service.insertAddressBook(this.addressbook).subscribe(data=>console.log("Data Saved"));
  }
  onUpdateContact(){
    this.submitted=true;
    this._service.updateAddressBookById(this.Id,this.addressbook).subscribe(data=>{console.log("Data Updated !")});
  }
}
