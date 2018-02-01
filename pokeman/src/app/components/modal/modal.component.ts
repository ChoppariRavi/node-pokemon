import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() idx;
  @Output()
  hideModal = new EventEmitter();

  modalData:any = {};

  constructor(
    private pokemonService:PokemonService
  ) { }

  ngOnInit() {
    //console.log(this.pokemonService.getPokeMonData(), this.idx);
    if(this.pokemonService.getPokeMonData() && this.idx){
      let _modalData = this.pokemonService.getPokeMonData().filter((data)=>data.id==this.idx);
      this.modalData = _modalData[0];
      //console.log(this.modalData);
    }    
  }

  closeModal(){
    this.hideModal.emit()
  }

}
