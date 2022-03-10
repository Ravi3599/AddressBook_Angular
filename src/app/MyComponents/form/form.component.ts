import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AddressBook } from 'src/app/Model/AddressBook';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) { }

  title:string="Person Address Form";

  addressbook:AddressBook = new AddressBook('','','','',0,0);

  ngOnInit(): void {
  }
  onDashboard(){
      this.router.navigate(["dashboard"]);
  }

  onAddContact(){
    console.log(this.addressbook);
  }
}
