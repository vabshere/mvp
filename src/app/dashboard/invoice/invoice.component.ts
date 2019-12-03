import { Component, OnInit, Inject } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import * as XLSX from "xlsx";

const ELEMENT_DATA = [
  {
    serial: 1,
    invoiceDate: "25 Dec",
    amount: 10079,
    prevOustanding: 12313,
    lastReceived: "22 Dec"
  },
  {
    serial: 13,
    invoiceDate: "22 Oct",
    amount: 100379,
    prevOustanding: 123313,
    lastReceived: "22 Dec"
  },
  {
    serial: 122,
    invoiceDate: "25 Sep",
    amount: 10079,
    prevOustanding: 123213,
    lastReceived: "22 Dec"
  },
  {
    serial: 12,
    invoiceDate: "7 Nov",
    amount: 100759,
    prevOustanding: 12313,
    lastReceived: "22 Dec"
  }
];

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})
export class InvoiceComponent implements OnInit {
  displayedColumns: string[] = [
    "serial",
    "invoiceDate",
    "amount",
    "prevOustanding",
    "lastReceived"
  ];
  sheet;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error("Cannot use multiple files");
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: "binary" });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      let data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      for (let i = 1; i < data.length; i++) {
        ELEMENT_DATA.push({
          serial: data[i][0],
          invoiceDate: data[i][1],
          amount: data[i][2],
          prevOustanding: data[i][3],
          lastReceived: data[i][4]
        });
      }
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  invoiceForm() {
    const dialogRef = this.dialog.open(AddInvoiceDialog, {
      data: {
        serial: "",
        invoiceDate: "",
        amount: "",
        prevOustanding: "",
        lastReceived: ""
      }
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
  selector: "add-invoice-dialog",
  templateUrl: "add-invoice-dialog.html"
})
export class AddInvoiceDialog {
  constructor(
    public dialogRef: MatDialogRef<AddInvoiceDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
