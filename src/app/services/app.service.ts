import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl = "http://localhost:5000"
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }
  createProducts(param): Observable<any> {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')


    return this.http.post(`${this.apiUrl}/products`, param, {
      headers: headers,
    });
  }
}
