import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developerdetails',
  templateUrl: './developerdetails.component.html',
  styleUrls: ['./developerdetails.component.css']
})
export class DeveloperdetailsComponent implements OnInit {

  constructor() { }

  title:string="Developer";
  ngOnInit(): void {
  }

}
