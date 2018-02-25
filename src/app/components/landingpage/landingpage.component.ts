import { Component, OnInit } from '@angular/core';
import {MatchercontrolService} from '../../services/matchercontrol.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  mykey;
  waitdisplay;
  constructor(private matcher: MatchercontrolService, private router: Router) { }

  ngOnInit() {
    this.waitdisplay = '';
  }

  loginVent(): void {
    this.matcher.ventFindMatch().then((resp) => {
      const parsed = JSON.parse(resp._body);
      let waitmore;
      this.mykey = parsed.key;
      waitmore = parsed.wait;
      if (waitmore) {// wait and check if someone matched you
        this.waitdisplay = 'waiting for a match!'
        let intervalID = setInterval(() => {
          this.matcher.checkstatus(this.mykey).then((waitResp) => {
            const parseWait = JSON.parse(waitResp._body);
            console.log(parseWait);
            if (!parseWait.wait) {
              localStorage.setItem('sessionkey', this.mykey);
              console.log('we found ya a frand!');
              clearInterval(intervalID);
              this.router.navigateByUrl('/matched');
            }
          });
        }, 1000);
      } else {// if alrd matched just keep goin bud
        console.log('got this key');
        console.log(this.mykey);
        localStorage.setItem('sessionkey', this.mykey);
        this.router.navigateByUrl('/matched');

      }
      console.log(parsed);
    });
  }

  loginSupp(): void {
    this.matcher.suppFindMatch().then((resp) => {
      const parsed = JSON.parse(resp._body);
      let waitmore;
      this.mykey = parsed.key;
      waitmore = parsed.wait;
      if (waitmore) {// wait and check if someone matched you
        this.waitdisplay = 'waiting for a match!'
        let intervalID = setInterval(() => {
          this.matcher.checkstatus(this.mykey).then((waitResp) => {
            const parseWait = JSON.parse(waitResp._body);
            console.log(parseWait);
            if (!parseWait.wait) {
              localStorage.setItem('sessionkey', this.mykey);
              console.log('we found ya a frand!');
              clearInterval(intervalID);
              this.router.navigateByUrl('/matched');
            }
          });
        }, 1000);
      } else {// if alrd matched just keep goin bud
        console.log('got this key');
        console.log(this.mykey);
        localStorage.setItem('sessionkey', this.mykey);
        this.router.navigateByUrl('/matched');

      }
      console.log(parsed);
    });
  }

}
