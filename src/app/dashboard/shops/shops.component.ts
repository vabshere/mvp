import { Component, OnInit, Inject } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

const ELEMENT_DATA = [
  {
    serial: 12,
    name: "ad",
    phone: 9284750183,
    owner: "lsjadbfi",
    address: "wyr 8wer r8"
  },
  {
    serial: 124,
    name: "dfg",
    phone: 1037593720,
    owner: "ssldsngg",
    address: "er twg8r"
  },
  {
    serial: 53,
    name: "dghbd",
    phone: 8284750284,
    owner: "dog",
    address: "uwecwyrw h twh"
  }
];
@Component({
  selector: "app-shops",
  templateUrl: "./shops.component.html",
  styleUrls: ["./shops.component.css"]
})
export class ShopsComponent implements OnInit {
  displayedColumns: string[] = ["serial", "name", "phone", "owner", "address"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addShops() {
    const dialogRef = this.dialog.open(AddShopsDialog, {
      data: { serial: "", name: "", phone: "", owner: "", address: "" }
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
  selector: "add-shops-dialog",
  templateUrl: "add-shops-dialog.html"
})
export class AddShopsDialog {
  constructor(
    public dialogRef: MatDialogRef<AddShopsDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
