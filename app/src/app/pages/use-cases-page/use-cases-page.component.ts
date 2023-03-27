import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUseCaseComponent } from '../../components/dialog-use-case/dialog-use-case.component';
import { UseCasesService } from '../../services/use-cases.service';

@Component({
  selector: 'app-use-cases-page',
  templateUrl: './use-cases-page.component.html',
  styleUrls: ['./use-cases-page.component.scss']
})
export class UseCasesPageComponent implements OnInit {

  constructor(public dialog: MatDialog, public useCases: UseCasesService) { }

  ngOnInit(): void {
  }
  openDialog(id:number) {
    let value= this.useCases.useCases[id]
   this.dialog.open(DialogUseCaseComponent, {
      data: value,
    });


  }

}
