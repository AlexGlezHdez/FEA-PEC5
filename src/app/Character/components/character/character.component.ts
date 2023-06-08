import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as CharactersAction from '../../actions';

import { ActivatedRoute } from '@angular/router';
import { CharacterDTO } from 'src/app/Character/models/character.dto';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  character!: CharacterDTO;

  panelOpenState: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    let identifier = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.store.select('characters').subscribe((characterResponse) => {
      this.character = characterResponse.character;
    });

    this.store.dispatch(
      CharactersAction.getCharacterById({ characterId: identifier })
    );
  }

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }
}
