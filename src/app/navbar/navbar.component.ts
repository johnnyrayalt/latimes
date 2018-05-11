import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
  today = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+090';
  toggleTopic: boolean = false;

  toggleTopics() {
    return this.toggleTopic = !this.toggleTopic;
  }
}
