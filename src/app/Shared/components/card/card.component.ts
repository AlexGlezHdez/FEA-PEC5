import { Component, Input, OnInit } from '@angular/core';
import { CardDTO } from '../../models/card.dto';
import { CharacterDTO } from 'src/app/Character/models/character.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() character: CharacterDTO = new CharacterDTO();

  card: CardDTO = new CardDTO('', '', '', '', '');

  constructor() {}

  ngOnInit() {
    this.card = {
      ...this.character,
      locationName: this.character.location.name,
    };
  }
}
