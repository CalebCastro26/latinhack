import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
