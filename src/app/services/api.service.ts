import {enableProdMode, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BASE_URL} from "../shared/constants";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(endpoint: string, offset = 0): Observable<any> {
    return this.http.get(this.buildUrl(endpoint, offset));
  }

  public buildUrl(endpoint: string, offset = 0): string {
    return `${BASE_URL}${endpoint}?ts=${environment.timestamp}&apikey=${environment.apiKey}&hash=${environment.hash}&offset=${offset}`
  }
}
