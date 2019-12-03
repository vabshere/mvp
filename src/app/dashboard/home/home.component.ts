import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

const ELEMENT_DATA = [
  {
    shop: "asdoad",
    salesman: "Gopu",
    amount: 10079,
    pending: 12313,
    zone: "22 Dec"
  },
  {
    shop: "ac a",
    salesman: "Golu",
    amount: 100379,
    pending: 123313,
    zone: "22 Dec"
  },
  {
    shop: "ancac",
    salesman: "asdad",
    amount: 10079,
    pending: 123213,
    zone: "22 Dec"
  },
  {
    shop: "ascna",
    salesman: "aspdac",
    amount: 100759,
    pending: 12313,
    zone: "22 Dec"
  }
];

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  stats = [
    { number: 12, name: "Retailers" },
    { number: 12, name: "Salesmen" },
    { number: 13, name: "Collections till date" },
    { number: 55, name: "Invoices generated" }
  ];

  backgrounds = ["#3f51b5", "#9c27b0", "#607d8b", "#d84315"];

  displayedColumns: string[] = [
    "shop",
    "salesman",
    "amount",
    "pending",
    "zone"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() {}

  ngOnInit() {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
