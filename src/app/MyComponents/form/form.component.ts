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

  //When component gets initialized this hook gets called and retrieved record for given Id
  ngOnInit(): void {
    this._service.getAddressBookById(this.Id).subscribe((getData:any)=>{
      console.log(getData.data);
      this.addressbook=getData.data;
    })
  }
  //Navigates to dashboard component
  onDashboard(){
      this.router.navigate(["dashboard"]);
  }
  //custom validation for city
  validateCity(value:any){
    if(value=='default'){
      this.cityHasError=true;
    }
    else{
      this.cityHasError=false;
    }
  }
  //custom validation for state
  validateState(value:any){
    if(value=='default'){
      this.stateHasError=true;
    }
    else{
      this.stateHasError=false;
    }
  }
  //Ability to save address book record to database
  onAddContact(){
    this.submitted=true;
    console.log(this.addressbook);
    this._service.insertAddressBook(this.addressbook).subscribe(data=>console.log("Data Saved"));
  }
  //Ability to update existing address book record 
  onUpdateContact(){
    this.submitted=true;
    this._service.updateAddressBookById(this.Id,this.addressbook).subscribe(data=>{console.log("Data Updated !")});
  }
}
