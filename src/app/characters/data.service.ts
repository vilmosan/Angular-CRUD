import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from './character.model';
import { CHARACTERS } from './mock-characters';
import { MessageService } from '../message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  charactersUrl:string = 'http://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getCharacters(): Observable<Character[]>{
    //return this.http.get<Character[]>(this.charactersUrl);
    this.messageService.add('DataService: fetched characters');
    return of(CHARACTERS);
  };

  getCharacter(id: number | string) {
    return this.getCharacters().pipe(
      // (+) before `id` turns the string into a number
      map((characters: Character[]) => characters.find(character => character.id === +id))
    );
  }

  createCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.charactersUrl, character, httpOptions);
  }

  updateCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.charactersUrl, character, httpOptions);
  }

  deleteCharacter(character: Character): Observable<any>{
    const url = `${this.charactersUrl}/${character.id}`;
    return this.http.delete<Character>(url, httpOptions)
  }
}
