import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { TypeMessage } from 'src/app/shared/model/portfolio.enums';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  msgs: Message[] = [];

  constructor(private notificationService: NotificationService,
  private messageService: MessageService) {}

  ngOnInit() {
    this.notificationService.notifier
      .subscribe((ms: { type: string; message: string; }) => {
        this.exibirMensagem(ms.type, ms.message);
    })
  }

  exibirMensagem(severity: string, msg: string) {
    this.msgs = [];
    let summary = '';
    switch (severity) {
      case TypeMessage.INFO:
      summary = ''
      break;
      case TypeMessage.WARN:
      summary = 'Aviso'
      break;
      case TypeMessage.SUCCESS:
      summary = 'Sucesso'
      break;
      case TypeMessage.ERROR:
      summary = 'Erro'
      break;
    }
    this.messageService.add({key: 'k1', severity: severity, summary: summary, detail: msg});
  }
}
