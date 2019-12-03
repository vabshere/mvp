import { Component, OnInit, Inject } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

const ELEMENT_DATA = [
  {
    name: "asdoad",
    phone: 1001043079,
    zone: "22 Dec"
  },
  {
    name: "ac a",
    phone: 1001043079,
    zone: "22 Dec"
  },
  {
    name: "ancac",
    phone: 1001043079,
    zone: "22 Dec"
  },
  {
    name: "ascna",
    phone: 1001043059,
    zone: "22 Dec"
  }
];

@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.css"]
})
export class SalesComponent implements OnInit {
  displayedColumns: string[] = ["name", "phone", "zone"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addSales() {
    const dialogRef = this.dialog.open(AddSalesDialog, {
      data: { name: "", phone: "", zone: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        ELEMENT_DATA.push(result);
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      }
    });
  }
}

@Component({
  selector: "add-sales-dialog",
  templateUrl: "add-sales-dialog.html"
})
export class AddSalesDialog {
  constructor(
    public dialogRef: MatDialogRef<AddSalesDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
