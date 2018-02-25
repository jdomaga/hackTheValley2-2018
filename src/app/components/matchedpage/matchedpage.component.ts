import { Component, OnInit } from '@angular/core';
import {MatchercontrolService} from '../../services/matchercontrol.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-matchedpage',
  templateUrl: './matchedpage.component.html',
  styleUrls: ['./matchedpage.component.css']
})
export class MatchedpageComponent implements OnInit {
  messageList;
  newmessagetext;
  constructor(private matcher: MatchercontrolService) { }

  ngOnInit() {
    this.newmessagetext = '';
    setInterval(() => {
      console.log('lookin for mesages');
      this.matcher.getMessages(localStorage.getItem('sessionkey')).then((listunparsed) => {
         const parsedlist = JSON.parse(listunparsed._body);
         console.log(parsedlist);
         this.messageList = parsedlist.data;
      });
    }, 1000 );
  }

  sendNewMssg(): void {
    console.log(this.newmessagetext);
    this.matcher.sendMessage(localStorage.getItem('sessionkey'), this.newmessagetext).then(() => {
      this.matcher.getMessages(localStorage.getItem('sessionkey')).then((listunparsed) => {
        const parsedlist = JSON.parse(listunparsed._body);
        console.log(parsedlist);
        this.messageList = parsedlist.data;
      });
    });
  }

}
