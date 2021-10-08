import { Component, OnInit } from '@angular/core';
import { TypeMessage } from '../shared/model/portfolio.enums';
import { FormEmail } from '../shared/model/portfolio.model';
import { NotificationService } from '../shared/services/notification/notification.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  dadosEmail: FormEmail = new FormEmail();
  resizeTextArea:boolean = true;

  constructor(private ns: NotificationService) { }

  ngOnInit(): void {
  }

  enviarMensagem(){
    
    this.ns.notify(TypeMessage.INFO, "Obrigado pelo contato. Retornarei assim que possível.")
  }

}
