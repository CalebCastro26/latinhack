import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteOrigin } from '@angular/material/autocomplete';
import { ApiService } from './services/api.service';
import { MatDialog } from '@angular/material/dialog';

import {MatSort, Sort} from '@angular/material/sort';
import { DialogComponent } from './components/dialog/dialog.component'
export interface PeriodicElement {
  challenge: string,
  created: string,
  descripcionSolution: string,
  members: any,
  solutionTitle: string
}
export interface Student {
  career: string,
  country: string,
  directorEmail: string,
  directorName: string,
  email: string,
  fullName: string,
  leader: boolean,
  linkedIn: string,
  university: string
}

const ELEMENT_DATA: PeriodicElement[] = [


];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'admin-ulatinhack2022';
  displayedColumns: string[] = ['date','name', 'challenge', 'title', 'description', 'info'];
  displayedColumns2: string[] = ['country','university', 'teams',];
  dataSource = ELEMENT_DATA;
  dataSource2 :any
  constructor(private api: ApiService, private dialog: MatDialog) { 
    
  }
 
  ngOnInit() {
    this.api.getConfig().subscribe(data => {
      let array = data.data;
      array.sort(function (a: { created: string | number | Date; }, b: { created: string | number | Date; } ) {
        let dateA:Date = new Date(a.created)
        let dateB:Date = new Date(b.created);
        return dateB.valueOf() - dateA.valueOf();
      });
      this.dataSource = array
      console.log(data)

   
      let newdata:any[]= []
      array.forEach((team:any) => {
        team.members.forEach((member:any)=>{
          let object= {country:member.country, university:member.university, team: team.groupName }
          newdata.push(object)
        })
      });
   
      let sinRepetidos = newdata.filter((valorActual, indiceActual, arreglo) => {
        //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
        return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
    });
    console.log("Sin repetidos es:", sinRepetidos);
      this.dataSource2= sinRepetidos
    
    })
  }
  openInfo(data:any){
    this.dialog.open(DialogComponent, {
      data: data
    })
  }

}
