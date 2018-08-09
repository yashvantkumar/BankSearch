import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private API_URL = 'https://app.fyle.in/api/bank_branches';

  constructor(private http: HttpClient) { }

  getMethod(path: string) {
    return this.http.get(this.API_URL+path);
  }

}
