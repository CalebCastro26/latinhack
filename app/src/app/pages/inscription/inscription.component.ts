import { InscriptionService } from './../../services/inscription.service';
import { Inscription } from './../../Models/inscription';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormArray, Validators, FormControl, FormGroup } from "@angular/forms";
import { GeneralDialogComponent } from '../../components/general-dialog/general-dialog.component';
import { University } from '../../classes/university'
import { Router } from '@angular/router';
import * as countries from '../../../assets/all.json'
import { UniversitiesNamesService } from '../../services/universities-names.service';
import { DialogValidationComponent } from '../../components/dialog-validation/dialog-validation.component';
import { DialogInscriptionComponent } from '../../components/dialog-inscription/dialog-inscription.component';

export interface PeriodicElement {
  name: string;
  career: string;
  teamLeader: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [

];

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})

export class InscriptionComponent implements OnInit {

  universities: any[] = [];
  eventos: any[] = [];
  desafios: any[] = [];

   inscriptionData: Inscription;

   registraFormInscription:  FormGroup;

  loadingSpinner= false;
  countryCtrl = new FormControl();
  //filteredCountries: Observable<Country[]>
  universityCards: any[] = []
  displayedColumns: string[] = ['position', 'weight', 'symbol', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;
  toggleDisabled = true;
  //isoCountry: string
  dataPost: any = []
  dataRaw: any = []
  myControl = new FormControl();
  constructor(public dialog: MatDialog, public fb: FormBuilder, private router: Router, private inscriptionService: InscriptionService) {

    this.inscriptionData = {} as Inscription;
    this.registraFormInscription = this.fb.group({

      eventoId:['',Validators.required],
      desafioId:['',Validators.required],
      universidadId:['',Validators.required],
      tituloSolucion:['',Validators.required],
      descripcionSolucion:['',Validators.required],
      nombreEquipo:['',Validators.required],
      participantes:[[],[Validators.required]]
    });
  }

  registrationForm = this.fb.group({
    nombreCompleto: ['',Validators.required],
    carrera:['',Validators.required],
    email:['',Validators.email],
    nombreCoordinador:[''],
    correoCoordinador:['',Validators.required],
    linkedin: '',
    teamLeader:[true,Validators.required],
  });


  getAutocompleteName(item: any) {
    return item.name;
  }

  selectEvent(item: any) {
    //this.isoCountry = item.option.value['alpha-3']
  }
  ngOnInit(): void {

    this.inscriptionService.GetUniversidad().subscribe((uni)=>{
      this.universities = uni;
      console.log(this.universities);
    });

    this.inscriptionService.GetEvento().subscribe((ev)=>{
      this.eventos = ev;
      console.log(this.eventos);
    });

    this.inscriptionService.GetDesafio().subscribe((de)=>{
      this.desafios = de;
      console.log(this.desafios);
    });
  }

  selectEvento(event:any){
    this.inscriptionService.GetEvento();
  }

  selectDesafio(event:any){
    this.inscriptionService.GetDesafio();
  }

  selectUniversidad(event:any){
    this.inscriptionService.GetUniversidad();
  }


  addParticipantInscription() {
    if (this.dataSource.length < 5) {
    let dialog = this.dialog.open(DialogInscriptionComponent, {
      height: '45%',
      width: '55%',
      data: {
        mode: "add",
        dataSource: this.dataSource
      }

    })
    dialog.afterClosed().subscribe(data => {
      console.log(data)
      if (data.confirmation === true) {
        if(data.universityName == 1){
          this.dataSource.push({
            name: data.nombreCompleto,
            career: data.carrera,
            teamLeader: data.teamLeader
          })
          this.dataRaw.push(data)
          this.dataRaw = [...this.dataRaw]
          this.dataSource = [...this.dataSource]
          this.dataPost.push({

             teamLeader: data.teamLeader,
             nombreCompleto: data.nombreCompleto,
             email: data.email,
             carrera: data.carrera,
             nombreCoordinador: data.nombreCoordinador,
             correoCoordinador: data.correoCoordinador,
             linkedin: data.linkedin

          })
          this.dataPost = [...this.dataPost]
          this.toggleDisabled = false;
        }else{
          this.dataSource.push({
            name: data.nombreCompleto,
            career: data.carrera,
            teamLeader: data.teamLeader
          })
          this.dataRaw.push(data)
          this.dataRaw = [...this.dataRaw]
          this.dataSource = [...this.dataSource]
          this.dataPost.push({

             teamLeader: data.teamLeader,
             nombreCompleto: data.nombreCompleto,
             email: data.email,
             carrera: data.carrera,
             nombreCoordinador: data.nombreCoordinador,
             correoCoordinador: data.correoCoordinador,
             linkedin: data.linkedin

          })
          this.dataPost = [...this.dataPost]
          this.toggleDisabled = false;
        }

      }

    })
  } else {
    this.dialog.open(GeneralDialogComponent, {
      data: {
        message: "Ha inscrito el máximo de 5 integrantes. Puede eliminar o modificar"
      }
    })
  }

  }
  editParticipantInscription(i: number) {
    let dialog= this.dialog.open(DialogInscriptionComponent, {
      height: '45%',
      width: '55%',
      data: {
        mode: "edit",
        index: i,
        dataSource: this.dataRaw
      }

    })
    dialog.afterClosed().subscribe((data)=>{
      if(data.confirmation === true){
        if (data.universityName== '1'){
          this.dataSource[i]= {
            name: data.nombreCompleto,
            career: data.carrera,
            teamLeader: data.teamLeader
          }
          this.dataRaw[i]= data
          this.dataRaw = [...this.dataRaw]
          this.dataSource = [...this.dataSource]
          this.dataPost[i]={

             teamLeader: data.teamLeader,
             nombreCompleto: data.nombreCompleto,
             email: data.email,
             carrera: data.carrera,
             nombreCoordinador: data.nombreCoordinador,
             correoCoordinador: data.correoCoordinador,
             linkedin: data.linkedin

          }
          this.dataPost = [...this.dataPost]
          this.toggleDisabled = false;
        }else{
          this.dataSource[i]= {
            name: data.nombreCompleto,
            career: data.carrera,
            teamLeader: data.teamLeader
          }
          this.dataRaw[i]= data
          this.dataRaw = [...this.dataRaw]
          this.dataSource = [...this.dataSource]
          this.dataPost[i]={

             teamLeader: data.teamLeader,
             nombreCompleto: data.nombreCompleto,
             email: data.email,
             carrera: data.carrera,
             nombreCoordinador: data.nombreCoordinador,
             correoCoordinador: data.correoCoordinador,
             linkedin: data.linkedin

          }
          this.dataPost = [...this.dataPost]
          this.toggleDisabled = false;
        }
      }
      })
  }

  inscription() {
    let team = 0;
    this.dataSource.forEach(item => {
     if(item.teamLeader === true){
       team++;
     }
    })
    if (this.dataSource.length > 0 && this.dataSource.length <= 5 && team === 1) {

      let confirmation = this.dialog.open(DialogValidationComponent)
      confirmation.afterClosed().subscribe(result => {
        if (result === true) {
          this.loadingSpinner = true;
          console.log(this.registraFormInscription);
          const newInscription: Inscription = {
            desafioId: this.registraFormInscription.value.desafioId,
            eventoId: this.registraFormInscription.value.eventoId,
            universidadId: this.registraFormInscription.value.universidadId,
            tituloSolucion: this.registraFormInscription.value.tituloSolucion,
            descripcionSolucion:this.registraFormInscription.value.descripcionSolucion,
            nombreEquipo: this.registraFormInscription.value.nombreEquipo,
            participantes: this.dataPost,
          };
          console.log(newInscription);
          this.inscriptionService.CreateInscription(newInscription).subscribe((result:any)=>{
            console.log(result)
            this.loadingSpinner = false;
            this.dialog.open(GeneralDialogComponent, {
              data: {
                message: "Ha sido inscrito correctamente. Revise su correo para conocer los siguiente pasos."
              }
            });
            this.router.navigateByUrl('/');

          }, (error)=>{
            console.error(error);
            console.log("Hola");
            this.loadingSpinner = false;
            this.dialog.open(GeneralDialogComponent, {
              data: {
                message: "Sucedió un error. Inténtelo más tarde"
              },
            });
          });
        }
      });

    } else if (this.dataSource.length == 0) {
      this.dialog.open(GeneralDialogComponent, {
        data: {
          message: "Añade como mínimo un integrante por favor."
        }
      })

    }else if (this.dataSource.length > 5) {
      this.dialog.open(GeneralDialogComponent, {
        data: {
          message: "Ha añadido más de 5 integrantes. "
        }
      })

    }else if (team == 0) {
      this.dialog.open(GeneralDialogComponent, {
        data: {
          message: "Añade como mínimo un team leader"
        }
      })

    }else if (team >1) {
      this.dialog.open(GeneralDialogComponent, {
        data: {
          message: "Hay más de un team leader. Escoja uno solo por favor"
        }
      })

    } else {
      this.dialog.open(GeneralDialogComponent, {
        data: {
          message: "Complete los datos por favor."
        }
      })
    }

  }
  delete(i: number) {
    this.dataSource.splice(i, 1)
    this.dataSource = [...this.dataSource]
    this.dataRaw.splice(i, 1)
    this.dataRaw = [...this.dataRaw]
    this.dataPost.splice(i, 1)
    this.dataPost = [...this.dataPost]
  }
}
