import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  email: string = ''
  query: string = ''

  constructor(
    private messenger: MessengerService
  ) { }

  ngOnInit(): void {
  
  }

  handleSubmit() {
    if(this.email == '' || this.query === ''){
      this.messenger.sendMsg({
        type: 'danger',
        msg: 'Fields cannot be blank'
      });
    } else{
      this.messenger.sendMsg({
        type: 'success',
        msg: 'Message Sent!'
      });
    }
  }

}
