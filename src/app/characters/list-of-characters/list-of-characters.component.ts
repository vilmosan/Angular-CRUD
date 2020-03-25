import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Character } from '../character.model';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.css']
})
export class ListOfCharactersComponent implements OnInit {

  //characters$: Observable<Character[]>;
  selectedId: number;

  characters: Character[];

  constructor(
    private activedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    /* this.characters$ = this.activedRoute.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.dataService.getAllCharacters();
      })
    ); */
    this.getHeroes();
  }

  getHeroes(): void {
    this.dataService.getAllCharacters()
    .subscribe(characters => this.characters = characters);
  }
  /*
  onSelect(character: Character): void{
    this.selectedCharacter = character;
  }

  onSelect(character: Character): void{
    this.selectedCharacter = character;
  }
*/
  goToUpdate(id: number | string): void {
    this.router.navigate(['/character', id]);
  }
/*
  createCharacter(newCharacter: Character): void {
    this.dataService.createCharacter(newCharacter)
      .subscribe(character => {
        // Overwrites the ID to be unique
        newCharacter.id = Date.now();
        this.charactersArray.push(character);
    });
  }
  
  */
/*
  deleteCharacter(character: Character){
    this.dataService.deleteCharacter(character).subscribe();
  }
  */
  deleteCharacter(character: Character): void {
    this.characters = this.characters.filter(h => h !== character);
    this.dataService.deleteCharacter(character).subscribe();
  }

}
