import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  salesPersonList: SalesPerson[] = [
    new SalesPerson("firstname1", "lastname1", "email@email1.com", 1),
    new SalesPerson("firstname2", "lastname2", "email@email2.com", 2),
    new SalesPerson("firstname3", "lastname3", "email@email3.com", 3),
    new SalesPerson("firstname4", "lastname4", "email@email4.com", 4)
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
