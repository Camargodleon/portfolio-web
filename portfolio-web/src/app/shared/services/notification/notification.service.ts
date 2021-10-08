import { EventEmitter, Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { TypeMessage } from '../../model/portfolio.enums';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifier = new EventEmitter<any>();
  msgs: Message[] = [];
  constructor() {}

  notify(type: TypeMessage, message: string) {
    this.notifier.emit({type: type, message: message});
  }
}
