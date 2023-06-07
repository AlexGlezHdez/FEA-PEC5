import {
  animate,
  state,
  style,
  transition,
  trigger,
  query,
  stagger,
} from '@angular/animations';

import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as CharactersAction from '../../actions';

import { CharacterDTO } from 'src/app/Character/models/character.dto';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(500)),
    ]),

    trigger('fadeCard', [
      transition('void <=> *', [
        query(
          ':enter',
          [
            style({
              opacity: 0,
            }),
            stagger(75, [animate('0.3s ease-in-out')]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('fadeCard2', [
      transition('void <=> *', [
        query(
          ':enter',
          [
            style({
              opacity: 0,
            }),
            stagger(75, [animate('0.3s ease-in-out')]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class CharactersComponent {
  characters: CharacterDTO[] = [];
  view_list: boolean = true;
  view_cards: boolean = !this.view_list;

  constructor(private store: Store<AppState>) {
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
