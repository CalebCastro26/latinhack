import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { VideoPopUpComponent } from '../../components/video-pop-up/video-pop-up.component'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public phone = "0051954187782"
  public title = "Hola, tengo una duda sobre ULATINHACK2022";

  constructor(public dialog: MatDialog,public translate: TranslateService) {

  }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(VideoPopUpComponent);
  }
  toTheTop(){
    window.scrollTo(0, 0)
  }
}
