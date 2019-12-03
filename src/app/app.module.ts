import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LogInComponent } from "./log-in/log-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HomeComponent } from "./dashboard/home/home.component";
import {
  InvoiceComponent,
  AddInvoiceDialog
} from "./dashboard/invoice/invoice.component";
import {
  SalesComponent,
  AddSalesDialog
} from "./dashboard/sales/sales.component";
import {
  ShopsComponent,
  AddShopsDialog
} from "./dashboard/shops/shops.component";
import { PaymentApproveComponent } from "./dashboard/payment-approve/payment-approve.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatListModule,
  MatDialogModule,
  MatDividerModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule
} from "@angular/material";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormsModule } from "@angular/forms";
import { SidenavComponent } from "./dashboard/sidenav/sidenav.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    InvoiceComponent,
    SalesComponent,
    ShopsComponent,
    PaymentApproveComponent,
    SidenavComponent,
    AddSalesDialog,
    AddShopsDialog,
    AddInvoiceDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDividerModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AddSalesDialog, AddShopsDialog, AddInvoiceDialog],
  bootstrap: [AppComponent]
})
export class AppModule {}
