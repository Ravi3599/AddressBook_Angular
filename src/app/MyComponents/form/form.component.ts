import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AddressbookService } from 'src/app/addressbook.service';
import { AddressBook } from 'src/app/Model/AddressBook';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router,private _service:AddressbookService) { }

  submitted=false;
  title:string="Person Address Form";
  cityHasError=true;
  stateHasError=true;
  addressbook:AddressBook = new AddressBook('','','','',0,0);

  ngOnInit(): void {
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
    this._service.enroll(this.addressbook).subscribe(data=>console.log("Data Saved",data),error=>console.log("Errors!",error));
  }
}
