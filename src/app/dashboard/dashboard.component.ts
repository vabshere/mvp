import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  links = [
    { id: "home", name: "Home" },
    { id: "invoice", name: "Invoice Upload" },
    { id: "sales", name: "Sales" },
    { id: "shops", name: "Shops" },
    { id: "payment-approval", name: "Payment Approval" }
  ];
  constructor() {}

  ngOnInit() {}
}
