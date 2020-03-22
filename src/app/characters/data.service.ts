import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Character } from './character.model';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private charactersUrl: string = 'https://rickandmortyapi.com/api/character';
  private urlParams: string = '1,2,3,4,5,6,7,8,9,10' // First 10 characters.
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getAllCharacters(): Observable<Character[]>{
    //return of(CHARACTERS);
    return this.http.get<Character[]>(`${this.charactersUrl}/${this.urlParams}`).pipe(
      tap(_ => this.log('Fetched characters')), // This doesn't work for some reason.
      catchError(this.handleError<Character[]>('getAllCharacters', []))
    );
  };

  getCharacter(id: number | string) {
    const url = `${this.charactersUrl}/${id}`;
    return this.http.get<Character>(url).pipe(
      tap(_ => this.log(`Fetched character id=${id}`)),
      catchError(this.handleError<Character>(`getCharacter id=${id}`))
    );


      // (+) before `id` turns the string into a number
      //map((characters: Character[]) => characters.find(character => character.id === +id))
    
  }

/*
  createCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.charactersUrl, character, httpOptions);
  }*/

  /** PUT: update the character on the server */
  updateCharacter(character: Character): Observable<any> {
    return this.http.put(this.charactersUrl, character, this.httpOptions).pipe(
      tap(_ => this.log(`Updated character id=${character.id}`)),
      catchError(this.handleError<any>('updateCharacter'))
    );
  }

/*
  deleteCharacter(character: Character): Observable<any>{
    const url = `${this.charactersUrl}/${character.id}`;
    return this.http.delete<Character>(url, this.httpOptions)
  }*/

  /** DELETE: delete the character from the server */
  deleteCharacter (character: Character | number): Observable<Character> {
    const id = typeof character === 'number' ? character : character.id;
    const url = `${this.charactersUrl}/${id}`;

    return this.http.delete<Character>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Deleted character id=${id}`)),
      catchError(this.handleError<Character>('deleteCharacter'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a DataService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`DataService: ${message}`);
}
}
