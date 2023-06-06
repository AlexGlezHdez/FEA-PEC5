import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as CharactersAction from '../../actions';

import { CharacterDTO } from 'src/app/Character/models/character.dto';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  characters: CharacterDTO[] = [];
  view_list: boolean = true;
  view_cards: boolean = !this.view_list;

  displayedColumns: string[] = ['name', 'status'];

  constructor(
    //    private charactersService: CharactersService,
    private store: Store<AppState>
  ) {
    this.store.select('characters').subscribe((charactersResponse) => {
      this.characters = charactersResponse.characters;
    });

    this.store.dispatch(CharactersAction.getAllCharacters());
  }

  viewAsList() {
    this.view_list = true;
    this.view_cards = false;
  }

  viewAsCards() {
    this.view_list = false;
    this.view_cards = true;
  }
}
