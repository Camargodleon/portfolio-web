import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  visible:boolean = false
  displayFrontDialog:boolean = false
  displayBackDialog:boolean = false
  displayOtherDialog:boolean = false

  images: any[];

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  responsiveOptions2:any[] = [
      {
          breakpoint: '1500px',
          numVisible: 5
      },
      {
          breakpoint: '1024px',
          numVisible: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  displayBasic: boolean;

  displayBasic2: boolean;

  displayCustom: boolean;

  activeIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  imageClick(index: number) {
      this.activeIndex = index;
      this.displayCustom = true;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event){
    if(window.scrollY<=(window.innerHeight*0.80)){
      this.visible=false
    } else {
      this.visible= true
    }
  }

}
