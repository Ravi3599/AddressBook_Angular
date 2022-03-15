import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressbookService } from 'src/app/addressbook.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  addressbook:any;
  title:string="Person Details";
  name:any;
  constructor(private router:Router,private service:AddressbookService,private route:ActivatedRoute) { }

  
  
  ngOnInit(): void {
    this.service.getAddressBook().subscribe(data=>{
      console.log(data);
      this.addressbook=data;
    })
  }
  onForm(){
    this.router.navigate(["form"]);
  }
  deleteAddressRecord(Id:any){
    this.service.deleteAddressBookById(Id).subscribe(data=>{
      console.log("Data Deleted");
      window.location.reload();
    });
  }
  editAddressRecord(Id:any){
    this.router.navigate(["update",Id]);
  }
  viewAddressRecord(Id:any){
    this.router.navigate(["details",Id]);
  }
  searchByCity(){
    this.service.searchByCity(this.name).subscribe(data=>{
      console.log("Data retrieved successfully");
      this.addressbook=data;
    })
  }
  searchByFirstName(){
    this.service.searchByFirstName(this.name).subscribe(data=>{
      console.log("Data retrieved successfully");
      this.addressbook=data;
    })
  }
  searchByPhoneNumber(){
    this.service.searchByPhoneNumber(this.name).subscribe(data=>{
      console.log("Data retrieved successfully");
      this.addressbook=data;
    })
  }
  sortByCityAsc(){
    this.service.sortByCityAsc().subscribe(data=>{
      console.log("Data got sorted in Asceding order by city");
      this.addressbook=data;
    })
  }
  sortByCityDesc(){
    this.service.sortByCityDesc().subscribe(data=>{
      console.log("Data got sorted in Asceding order by city");
      this.addressbook=data;
    })
  }
  sortByFirstNameAsc(){
    this.service.sortByFirstNameAsc().subscribe(data=>{
      console.log("Data got sorted in Asceding order by city");
      this.addressbook=data;
    })
  }
}
