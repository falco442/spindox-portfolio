import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user";
import {UserResponse} from "../models/user-response";
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  subtitle: string | Date;

  public user: User;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<UserResponse>('https://randomuser.me/api')
      .subscribe(
        (data: UserResponse) => {
          if (data && data.results && data.results.length) {
            this.user = data.results[0];
          }
        },
        (err: HttpErrorResponse) => console.error(err)
      );
  }

  set(title: string, subtitle: string | Date) {
    this.title = title;
    const date = moment(subtitle);
    if (date.isValid()) {
      this.subtitle = date.format('DD/MM/YYYY');
    } else {
      this.subtitle = subtitle;
    }
  }
}
