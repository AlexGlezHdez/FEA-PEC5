import { createAction, props } from '@ngrx/store';
import { CharacterDTO } from '../models/character.dto';
import { HttpErrorResponse } from '@angular/common/http';

export const getAllCharacters = createAction(
  '[Characters] Get characters list'
);
export const getAllCharactersSuccess = createAction(
  '[Characters] Get characters list success',
  props<{ characters: CharacterDTO[] }>()
);
export const getAllCharactersFailure = createAction(
  '[Characters] Get characters list failure',
  props<{ payload: HttpErrorResponse }>()
);

export const getCharacterById = createAction(
  '[Character] Get character',
  props<{ characterId: string }>()
);
export const getCharacterByIdSuccess = createAction(
  '[Character] Get character success',
  props<{ character: CharacterDTO }>()
);
export const getCharacterByIdFailure = createAction(
  '[Character] Get character failure',
  props<{ payload: HttpErrorResponse }>()
);
