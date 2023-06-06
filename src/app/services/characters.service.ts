import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterDTO } from '../Character/models/character.dto';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  characters!: { info: Object; results: CharacterDTO[] };

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character');
  }

  getCharacterById(id: String): Observable<CharacterDTO> {
    return this.http.get<CharacterDTO>(
      'https://rickandmortyapi.com/api/character/' + id
    );
  }
}
