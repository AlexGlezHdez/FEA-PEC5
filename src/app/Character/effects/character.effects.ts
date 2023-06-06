import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, catchError, exhaustMap, finalize, map } from 'rxjs/operators';
import * as CharacterActions from '../actions';
import { CharactersService } from '../../services/characters.service';

@Injectable()
export class CharactersEffects {
  constructor(
    private actions$: Actions,
    private charactersService: CharactersService
  ) {}

  getCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.getAllCharacters),
      exhaustMap(() =>
        this.charactersService.getAllCharacters().pipe(
          map((characters) => {
            return CharacterActions.getAllCharactersSuccess({
              characters: characters.results,
            });
          }),
          catchError((error) => {
            return of(
              CharacterActions.getAllCharactersFailure({ payload: error })
            );
          })
        )
      )
    )
  );

  getCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.getCharacterById),
      exhaustMap(({ characterId }) =>
        this.charactersService.getCharacterById(characterId).pipe(
          map((character) => {
            return CharacterActions.getCharacterByIdSuccess({
              character: character,
            });
          }),
          catchError((error) => {
            return of(
              CharacterActions.getCharacterByIdFailure({ payload: error })
            );
          })
        )
      )
    )
  );
}
