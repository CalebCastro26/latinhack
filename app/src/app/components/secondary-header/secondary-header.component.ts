import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {
  showFiller = false;
  side= false;
  @ViewChild("myNameElem") myNameElem: ElementRef | undefined;
  show= true;
  constructor() { }

  ngOnInit(): void {
  }
  showMenu(){
    console.log(this.myNameElem)
    let ref= this.myNameElem?.nativeElement;
    console.log(ref.style.width)
    if(ref.style.width== "0vw" ||ref.style.width== ""){
      ref.style.width= "40vw";
    }
    else{
      ref.style.width= "0vw";
    }
  

  }

}
