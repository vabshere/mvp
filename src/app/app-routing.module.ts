import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LogInComponent } from "./log-in/log-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./dashboard/home/home.component";
import { InvoiceComponent } from "./dashboard/invoice/invoice.component";
import { PaymentApproveComponent } from "./dashboard/payment-approve/payment-approve.component";
import { ShopsComponent } from "./dashboard/shops/shops.component";
import { SalesComponent } from "./dashboard/sales/sales.component";

const routes: Routes = [
  { path: "", redirectTo: "log-in", pathMatch: "prefix" },
  { path: "log-in", component: LogInComponent },
  { path: "sign-up", component: SignUpComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "prefix" },
      { path: "home", component: HomeComponent },
      { path: "sales", component: SalesComponent },
      { path: "shops", component: ShopsComponent },
      { path: "payment-approval", component: PaymentApproveComponent },
      { path: "invoice", component: InvoiceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
