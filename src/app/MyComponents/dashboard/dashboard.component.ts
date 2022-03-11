import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressbookService } from 'src/app/addressbook.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private service:AddressbookService) { }

  addressbook:any;
  title:string="Person Details";
  
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
    this.service.deleteAddressBookById(Id).subscribe(data=>{console.log("Data Deleted")});
  }
  editAddressRecord(Id:any){
    this.router.navigate(["update",Id]);
  }
}
