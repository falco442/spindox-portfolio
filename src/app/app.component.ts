import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spindox-portfolio';

  data: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://randomuser.me/api')
      .subscribe(
        (data: any) => this.data = data,
        (err: HttpErrorResponse) => console.error(err)
      );
  }
}
