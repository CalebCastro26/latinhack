import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @ Inject(MAT_DIALOG_DATA) public data:any) { }
members: any 
  ngOnInit(): void {
    console.log(this.data)
    this.members= this.data.members
  }
  close() {
    this.dialogRef.close();
  }
}
