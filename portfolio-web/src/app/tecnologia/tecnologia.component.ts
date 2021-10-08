import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  visible:boolean = false
  displayFrontDialog:boolean = false
  displayBackDialog:boolean = false
  displayOtherDialog:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event){
    if(window.scrollY<=(window.innerHeight*0.90)){
      this.visible=false
    } else {
      this.visible= true
    }
  }

}
