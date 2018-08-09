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
  offsetValue = [10, 30, 50, 70, 100];
  limits = [10, 50, 100, 150, 200]
  constructor(private http: HttpService) { }

  ngOnInit() {
    
  }
  
  testValue(event) {
    this.http.getMethod('?city='+event.target.value+'&offset=0&limit=100').subscribe(
      (data) => this.gotData(data),
      (err) => console.log(err)
    )
  }

  gotData(data) {
    this.dataSource = data;
  }
}
