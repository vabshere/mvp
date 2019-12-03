import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  user = { email: "", password: "" };

  constructor(private router: Router, public zone: NgZone) {}

  ngOnInit() {}

  onSubmit() {
    this.zone.run(() => this.router.navigate(["/dashboard"]));
  }
}
