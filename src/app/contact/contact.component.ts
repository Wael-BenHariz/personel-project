import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message.model';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  newMessage = new Message();
  sent: boolean = false;

  constructor(private service: GestionService) { }

  sendMessage() {
    if (
      this.newMessage.nomMessage != null &&
      this.newMessage.emailMessage != null &&
      this.newMessage.sujetMessage != null &&
      this.newMessage.contenuMessage != null) {
      this.service.sendMessage(this.newMessage).subscribe(() => {
        
        this.sent = true;
        this.newMessage.nomMessage = "" 
          this.newMessage.emailMessage = "" 
          this.newMessage.sujetMessage = "" 
          this.newMessage.contenuMessage = ""
      })
    }
  }

  ngOnInit(): void {
  }

}
