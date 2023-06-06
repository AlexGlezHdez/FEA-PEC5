import { Action, createReducer, on } from '@ngrx/store';
import {
  getAllCharacters,
  getAllCharactersFailure,
  getAllCharactersSuccess,
  getCharacterById,
  getCharacterByIdFailure,
  getCharacterByIdSuccess,
} from '../actions';
import { CharacterDTO } from '../models/character.dto';

export interface CharactersState {
  characters: CharacterDTO[];
  character: CharacterDTO;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: CharactersState = {
  characters: new Array<CharacterDTO>(),
  character: new CharacterDTO(),
  loading: false,
  loaded: false,
  error: null,
};

const _charactersReducer = createReducer(
  initialState,
  on(getAllCharacters, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getAllCharactersSuccess, (state, action) => ({
    ...state,
    characters: action.characters,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getAllCharactersFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(getCharacterById, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(getCharacterByIdSuccess, (state, action) => ({
    ...state,
    character: action.character,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(getCharacterByIdFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { payload },
  }))
);

export function charactersReducer(
  state: CharactersState | undefined,
  action: Action
): CharactersState {
  return _charactersReducer(state, action);
}
