import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user";
import {UserResponse} from "../models/user-response";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spindox-portfolio';

  user: User;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<UserResponse>('https://randomuser.me/api')
      .subscribe(
        (data: UserResponse) => {
          if (data && data.results && data.results.length) {
            // this.user = data.results[0];
          }
        },
        (err: HttpErrorResponse) => console.error(err)
      );
  }
}
