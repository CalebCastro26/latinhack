import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.scss']
})
export class BasesComponent implements OnInit {
  pdfSrc = "../../../assets/";
  constructor() { }

  ngOnInit(): void {
  }

}
