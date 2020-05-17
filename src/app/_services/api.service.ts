import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {GlobalVariables} from "../globals";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(uri: string) {
    return this.http.get(GlobalVariables.API_URL + uri);
  }

  post(uri: string, body) {
    return this.http.post(GlobalVariables.API_URL + uri, body);
  }

  put(uri: string, body) {
    return this.http.put(GlobalVariables.API_URL + uri, body);
  }

  delete(uri: string, body) {
    return this.http.delete(GlobalVariables.API_URL + uri);
  }
}
