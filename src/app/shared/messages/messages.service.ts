import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];
  type: string;

  private showClearSource = new BehaviorSubject<boolean>(false);
  showClear = this.showClearSource.asObservable();

  constructor() { 
    console.log("Servicio de cliente listo para usar");
  }


  add(message: string) {
    this.messages.push(message);
  }

  create(message: string, type: string, clear: boolean) {
    this.messages = [message];
    this.type = type;
    this.showClearSource.next(!clear);
    if (clear) {
      setTimeout(() => {
        this.clear();
      })
    }
  }

  clear() {
    this.messages = [];
  }

}
