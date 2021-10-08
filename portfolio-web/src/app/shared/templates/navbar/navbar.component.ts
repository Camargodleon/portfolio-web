import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  visible:boolean= false
  constructor() { }

  ngOnInit(): void {
  }

  visibilityNavBar(){
    if(window.scrollY==0){
      this.visible=false
    } else {
      this.visible= true
    }
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event){
    if(window.scrollY<=(window.innerHeight*0.5)){
      this.visible=false
    } else {
      this.visible= true
    }
  }

}
