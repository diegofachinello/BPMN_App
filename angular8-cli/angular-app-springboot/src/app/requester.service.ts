import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/request';

  constructor(private http: HttpClient) { }

  getRequester(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRequester(requester: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, requester);
  }

  updateRequester(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRequester(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRequestList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}