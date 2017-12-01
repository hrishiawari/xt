import { Injectable } from '@angular/core';
;
import { Http, Headers, Response, Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactserService {
  results;
  Name;
  Email;
  Phone;
  Message;
  constructor(
    private http: Http
  ) { }
  submit(dtls) {
    var data = {
      'name': dtls.name,
      'email': dtls.email,
      'message': dtls.message,
      'phone': dtls.phone,
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const body = JSON.stringify(data);
    return this.http.post('http://jirt.in/svcet/xt.php', body, { headers })
    .map(res => res.json())
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error' ));
      // .subscribe(data => {
      //   let body = data.json();
      //   var c: boolean = body.success;
      //   if (c === true) {
      //     console.log("true")
      //   } else console.log("false")
      // })
  }
}
