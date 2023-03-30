import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { GeneralDialogComponent } from '../../components/general-dialog/general-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-inscription',
  templateUrl: './dialog-inscription.component.html',
  styleUrls: ['./dialog-inscription.component.scss'],
})
export class DialogInscriptionComponent implements OnInit {
  @ViewChild('country') country: HTMLInputElement | undefined;
  buttonName = 'Añadir integrante';
  selected2: any;
  optionsCountry: any[] = [];
  filteredOptionsCountry: any;
  countryCtrl = new FormControl();
  universityCards: any[] = [];
  displayedColumns: string[] = ['position', 'weight', 'symbol', 'delete'];
  participants: any;
  toggleDisabled = false;
  isoCountry: string | undefined;
  other = false;
  spinner = false;
  t = 0;
  e = 0;

  myControl = new FormControl();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogInscriptionComponent>,
    public dialog: MatDialog,
    public fb: FormBuilder,
    private router: Router
  ) {}
  registrationForm = this.fb.group({
    nombreCompleto: ['', [Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{5,40}$/), Validators.required]],
    carrera: ['', [Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{5,40}$/), Validators.required]],
    email: ['', [Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/), Validators.required]],
    nombreCoordinador: ['', [Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{5,40}$/), Validators.required]],
    correoCoordinador: ['', [Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/), Validators.required]],
    linkedin: ['', Validators.pattern(/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/gm)],
    teamLeader: [true, Validators.required],
    confirmation: true,
    index: '',
  });

  ngOnInit(): void {
    console.log(this.data);
    if (this.data.mode == 'edit') {
      this.buttonName = 'Editar integrante';
      this.registrationForm.patchValue({
        teamLeader: this.data.dataSource[this.data.index].teamLeader,
        nombreCompleto: this.data.dataSource[this.data.index].nombreCompleto,
        carrera: this.data.dataSource[this.data.index].carrera,
        email: this.data.dataSource[this.data.index].email,
        nombreCoordinador:this.data.dataSource[this.data.index].nombreCoordinador,
        correoCoordinador:this.data.dataSource[this.data.index].correoCoordinador,
        linkedin: this.data.dataSource[this.data.index].linkedin,
        confirmation: true,
        index: this.data.dataSource[this.data.index].index,
      });
      //this.registrationForm.addControl('nameOther',new FormControl('', Validators.required)
      //);
      //this.registrationForm.patchValue({
        //nameOther: this.data.dataSource[this.data.index].nameOther,
      //});
    }
  }

  getAutocompleteName(item: any) {
    return item.name;
  }

  namenameOther(value: any) {
    if (value.value == 1) {
      this.other = true;
      this.registrationForm.addControl(
        'nameOther',
        new FormControl('', Validators.required)
      );
    } else {
      this.other = false;
      this.registrationForm.removeControl('nameOther');
    }
  }
  close() {
    this.dialogRef.close();
  }

  addParticipant() {
      console.log(this.registrationForm.value);
      if (this.registrationForm.valid){
        this.dialogRef.close(this.registrationForm.value)
      }else{
        this.dialog.open(GeneralDialogComponent, {
          data: {
            message: 'Complete de manera correcta la información de inscripción',
          },
        });
      }
  }
}
