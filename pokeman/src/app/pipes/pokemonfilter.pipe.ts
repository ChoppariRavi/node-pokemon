import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonfilter'
})
export class PokemonfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args){
      let filtredData = value.filter(item => item.name.indexOf(args)!=-1);
     // console.log(filtredData);
      return filtredData;
    }
    return value;
  }

}
