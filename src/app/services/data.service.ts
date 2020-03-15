import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  charactersUrl:string = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10'

  constructor(private http:HttpClient) {
    
    
    }
    getCharacters():Observable<Character[]> {
      return this.http.get<Character[]>(`${this.charactersUrl}`);
    }

    addCharacter(character:Character):Observable<Character> {
      return this.http.post<Character>(this.charactersUrl, character, httpOptions);
    }

    deleteCharacter(character:Character):Observable<Character> {
      const url = `${this.charactersUrl}/${character.id}`;
      return this.http.delete<Character>(url, httpOptions);
    }





    /*
    localStorage.removeItem('data');
    const characters = [];
    for (let i = 0; i < 10; i++) {
      const character = new Character();
      character.id = 'id-id-id-' + i;
      character.name = 'Name ' + i;
      character.gender = 'Fe/male';
      character.type = 'Type ' + i;
      characters.push(character);
    }
    localStorage.setItem('data', JSON.stringify(characters));
  }

  public list(): Character[] {
    return JSON.parse(localStorage.getItem('data')) as Character[];
  }

  public add(character: Character) {
    const data = this.list();
    data.push(character);
    localStorage.setItem('data', JSON.stringify(data));
  }

  public save(character: User) {
    let data = this.list();
    data = data.filter(value => value.id !== character.id);
    data.push(character);
    localStorage.setItem('data', JSON.stringify(data));
  }

  public findById(id: string) {
    const data = this.list();
    for (const d of data) {
      if (d.id === id) {
        return d;
      }
    }
    return undefined;
  }
  */

}
