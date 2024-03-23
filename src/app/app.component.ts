import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeapiService } from './src/core/services/pokeapi.service';
import { PokeList } from '../core/model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  template: `@if(pokemonList$ | async; as resultObject){
    <ul>
      @for (item of resultObject.results; track item.name){
      <li>
        <p>{{ item.name }}</p>
        <p></p>
      </li>
      <li>
        <p>{{ item.url }}</p>
        <p></p>
      </li>
      }
    </ul>
    }`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  public pokemonList$!: Observable<PokeList>;

  constructor(private ApiSrv: PokeapiService) {
    this.pokemonList$ = this.ApiSrv.getList();
  }
}
