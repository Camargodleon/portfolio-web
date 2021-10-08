import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  heading: string = "Soluções para a Web"
  subHeading: string = "Eu sou o Leonardo e aqui você vai encontrar informações sobre meus trabalhos. Minha proposta é desenvolver soluções para aplicações web com as melhores tecnologias disponíveis no mercado."
  btnFreela: string = "Me conheça como freelancer"
  btnAnalist: string = "Me conheça como Analista de Sistemas"

  constructor() { }

  ngOnInit(): void {
  }
}
