import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  cities = ['BANGALORE', 'HYDERABAD', 'CHENNAI', 'MUMBAI', 'PUNE'];
  searchKey = '';
  dataSource = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
    
  }
  
  testValue(event) {
    this.http.getMethod('?city='+event.target.value+'&offset=0&limit=50').subscribe(
      (data) => this.gotData(data),
      (err) => console.log(err)
    )
  }

  gotData(data) {
    this.dataSource = data;
  }
}
