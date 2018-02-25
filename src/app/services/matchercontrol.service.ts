import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Headers, Http} from '@angular/http';

@Injectable()
export class MatchercontrolService {
  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  ventFindMatch(): Promise<any> {
    const url = `${environment.BASE_URL}/match/venter`;
    const heads: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, {headers: heads}).toPromise();
  }

  suppFindMatch(): Promise<any> {
    const url = `${environment.BASE_URL}/match/listener`;
    const heads: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, {headers: heads}).toPromise();
  }

  checkstatus(keysent): Promise<any> {
    const url = `${environment.BASE_URL}/match/checkstatus`;
    const heads: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, {key: keysent}, {headers: heads}).toPromise();
  }

  sendMessage(keysent, message): Promise<any> {
    const url = `${environment.BASE_URL}/sendMssg`;
    const heads: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, {key: keysent, mssg: message}, {headers: heads}).toPromise();
  }

  getMessages(keysent): Promise<any> {
    const url = `${environment.BASE_URL}/getMssg`;
    const heads: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, {key: keysent}, {headers: heads}).toPromise();
  }

}
