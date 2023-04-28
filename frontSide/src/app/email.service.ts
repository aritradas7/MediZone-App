import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = "https://mailthis.to/medizone.helpdesk@gmail.com"
  constructor(private http: HttpClient){}

  SendEmail(email: string, pass: string) {
      var message = 'Your new medizone password is : '
      message = message + pass

      return this.http.post(this.url, {
        email: email,
        _subject: 'Medizone password reset!',
        message: message
      })
  }
}
