import { ActionReducerMap } from '@ngrx/store';

import { CharactersEffects } from './Character/effects/character.effects';
import * as CharactersReducer from './Character/reducers';

export interface AppState {
  characters: CharactersReducer.CharactersState;
}

export const appReducers: ActionReducerMap<AppState> = {
  characters: CharactersReducer.charactersReducer,
};

export const EffectsArray: any[] = [CharactersEffects];
