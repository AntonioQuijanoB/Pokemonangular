import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeList } from '../../../../core/model';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  urlBase = `https://pokeapi.co/api/v2/pokemon/`;
  constructor(private client: HttpClient) {}
  getList(): Observable<PokeList> {
    return this.client.get<PokeList>(this.urlBase);
  }
}
