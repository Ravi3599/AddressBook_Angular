import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressbookService } from 'src/app/addressbook.service';
import { AddressBook } from 'src/app/Model/AddressBook';

@Component({
  selector: 'app-addressdetails',
  templateUrl: './addressdetails.component.html',
  styleUrls: ['./addressdetails.component.css']
})
export class AddressdetailsComponent implements OnInit {

  Id:any=this.route.snapshot.paramMap.get('Id');
  addressbook:any;
  constructor(private service:AddressbookService,private router:Router,private route:ActivatedRoute) { }

  //This ngOnInit() hook is called when component initialized and return data for given id 
  ngOnInit(): void {
    this.service.getAddressBookById(this.Id).subscribe((getData:any)=>{
      console.log(getData.data);
      this.addressbook=getData.data;
    })
  }
  //Navigates to dashboard component
  onBack(){
    this.router.navigate(['dashboard']);
  }
  //Navigates to form component with id( relative routing)
  editRecord(){
    this.router.navigate(['update',this.Id]);
  }

}
