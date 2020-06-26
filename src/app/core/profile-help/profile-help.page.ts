import { Component, OnInit } from '@angular/core';
import { Messages } from '../../../assets/mock/messages';

@Component({
  selector: 'app-profile-help',
  templateUrl: './profile-help.page.html',
  styleUrls: ['./profile-help.page.scss'],
})
export class ProfileHelpPage implements OnInit {

  // Icon
  iconAvatar = 'assets/img/default/avatar.png'

  // Messages
  messages = Messages

  // Data
  ticket
  input

  constructor(
    // private ticketService: TicketsService
  ) { }

  ngOnInit() {
  }

  loadInfo() {
    
  }

  sendMessage() {

  }

}
