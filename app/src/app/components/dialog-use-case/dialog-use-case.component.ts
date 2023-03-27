import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-use-case',
  templateUrl: './dialog-use-case.component.html',
  styleUrls: ['./dialog-use-case.component.scss']
})
export class DialogUseCaseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogUseCaseComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  close() {
    this.dialogRef.close();
  }
}
