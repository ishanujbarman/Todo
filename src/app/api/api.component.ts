import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  data : any;
  link = 'https://api.spacexdata.com/v3/missions';

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.get(this.link).subscribe((responseData :any)=> {console.log(responseData)
      this.data = responseData;
    });
  }

}
