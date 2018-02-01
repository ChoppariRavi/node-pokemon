import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonfilterPipe } from '../../pipes/pokemonfilter.pipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pokemons:any = [];
  showModal = false;
  indexVal = 0;

  searchTxt = '';

  constructor(
    private pokemonService:PokemonService
  ) { }

  ngOnInit() {
    this.getPokemonData();
  }
 

  viewDetails(idx){
    //console.log("idx", idx);
    this.showModal = true;
    this.indexVal = idx+1;
  }

  hideModalHandler(event){
    this.showModal = false;
  }

  searchPokemon(e, searchIp){
    //console.log(e, searchIp.value);
    this.searchTxt = searchIp.value;
    e.preventDefault();
  }

  searchIpfun(e){
    if(e.target.value === ""){
      this.searchTxt = "";
    }
  }

  getPokemonData(){
    this.pokemonService.getPokemon().subscribe((response)=>{
      this.pokemonService.setPokemonData(response);      
      this.pokemons = response;
      //console.log("this.pokemons: ", this.pokemons);
    });
  }

}
