import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Observable
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PokemonService {

  pokemonData:any = [];

  constructor(
    private http:HttpClient
  ) { }

  setPokemonData(data){
    this.pokemonData = data;
  }

  getPokeMonData(){
    return this.pokemonData;
  }

  getPokemon(){
    return this.http.get("./assets/json/pokemon.json").pipe(
      tap((response)=>{
        return response;
      })
    );
  }

}
