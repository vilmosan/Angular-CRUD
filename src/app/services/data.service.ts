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

  characterUrls:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  getCharacters():Observable<Character[]>{
    return this.http.get<Character[]>(this.characterUrls);
  }

  deleteCharacter(character:Character):Observable<any>{
    const url = `${this.characterUrls}/${character.id}`;
    return this.http.delete<Character>(url, httpOptions)
  }


}
