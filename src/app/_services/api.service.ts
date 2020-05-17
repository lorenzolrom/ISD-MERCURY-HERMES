import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders({});

  constructor(private http: HttpClient) { }

  get(uri: string) {
    return this.http.get('https://tools.llrweb.com/ic/' + uri, {headers: this.headers});
  }
}
