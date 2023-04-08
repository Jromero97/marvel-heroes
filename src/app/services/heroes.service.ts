import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {CHARACTERS_ENDPOINT} from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private api: ApiService) { }

  public getMarvelHeroes(offset = 0): Observable<any> {
    return this.api.get(CHARACTERS_ENDPOINT, offset);
  }
}
