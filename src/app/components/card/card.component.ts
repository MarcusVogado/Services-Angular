import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name: string = ""
  stats: string = ""
  photoPath: string[] = []

  constructor(
    private service: PokemonService
  ) {

  }
  ngOnInit(): void {
    this.service.getPokemon("pikachu");
  }
}
