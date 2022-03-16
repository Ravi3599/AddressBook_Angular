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

  //When component gets initialized this hook gets called and return all address book records
  ngOnInit(): void {
    this.service.getAddressBook().subscribe(data=>{
      console.log(data);
      this.addressbook=data;
    })
  }
  //Navigates to form component
  onForm(){
    this.router.navigate(["form"]);
  }
  //Calls service class's http deleteById method to delete record for given id
  deleteAddressRecord(Id:any){
    this.service.deleteAddressBookById(Id).subscribe(data=>{
      console.log("Data Deleted");
      window.location.reload();
    });
  }
  //Navigates to form component with Id
  editAddressRecord(Id:any){
    this.router.navigate(["update",Id]);
  }
  //Navigates to address details component with Id
  viewAddressRecord(Id:any){
    this.router.navigate(["details",Id]);
  }
  //Calls searchByCity method in service to find record with given city name
  searchByCity(){
    this.service.searchByCity(this.name).subscribe(data=>{
      console.log("Data retrieved successfully");
      this.addressbook=data;
    })
  }
  //Calls searchByFirstName method in service to find record with given first name
  searchByFirstName(){
    this.service.searchByFirstName(this.name).subscribe(data=>{
      console.log("Data retrieved successfully");
      this.addressbook=data;
    })
  }
  //Calls searchByPhoneNumber method in service to find record with given phone number
  searchByPhoneNumber(){
    this.service.searchByPhoneNumber(this.name).subscribe(data=>{
      console.log("Data retrieved successfully");
      this.addressbook=data;
    })
  }
  //Calls sortByCityAsc method in service to sort  records accordding to city name in ascending order
  sortByCityAsc(){
    this.service.sortByCityAsc().subscribe(data=>{
      console.log("Data got sorted in Asceding order by city");
      this.addressbook=data;
    })
  }
  //Calls sortByCityAsc method in service to sort  records accordding to city name in descending order
  sortByCityDesc(){
    this.service.sortByCityDesc().subscribe(data=>{
      console.log("Data got sorted in Asceding order by city");
      this.addressbook=data;
    })
  }
  //Calls sortByFirstNameAsc method in service to sort  records accordding to first name in ascending order
  sortByFirstNameAsc(){
    this.service.sortByFirstNameAsc().subscribe(data=>{
      console.log("Data got sorted in Asceding order by city");
      this.addressbook=data;
    })
  }
}
