import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { University } from 'src/app/classes/university';
@Component({
  selector: 'app-dialog-university',
  templateUrl: './dialog-university.component.html',
  styleUrls: ['./dialog-university.component.scss']
})
export class DialogUniversityComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogUniversityComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: University) { }

  ngOnInit(): void {

  }
  cancelar() {
    this.dialogRef.close();
  }

}
