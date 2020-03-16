import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Character } from '../models/character.model';

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

  constructor(private http:HttpClient) { }

  getCharacters():Observable<Character[]>{
    return this.http.get<Character[]>(this.charactersUrl);
  }

  addCharacter(character:Character):Observable<Character> {
    return this.http.post<Character>(this.charactersUrl, character, httpOptions);
  }

  deleteCharacter(character:Character):Observable<any>{
    const url = `${this.charactersUrl}/${character.id}`;
    return this.http.delete<Character>(url, httpOptions)
  }


}
