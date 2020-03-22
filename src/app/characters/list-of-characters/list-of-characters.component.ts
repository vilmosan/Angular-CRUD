import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Character } from '../character.model';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.css']
})
export class ListOfCharactersComponent implements OnInit {

  characters$: Observable<Character[]>;
  selectedId: number;

  constructor(
    private activedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.characters$ = this.activedRoute.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.dataService.getCharacters();
      })
    );
  }
  /*
  onSelect(character: Character): void{
    this.selectedCharacter = character;
  }

  onSelect(character: Character): void{
    this.selectedCharacter = character;
  }

  goToUpdate(id: number): void {
    this.router.navigate(['update', id]);
  }

  createCharacter(newCharacter: Character): void {
    this.dataService.createCharacter(newCharacter)
      .subscribe(character => {
        // Overwrites the ID to be unique
        newCharacter.id = Date.now();
        this.charactersArray.push(character);
    });
  }
  
  deleteCharacter(character:Character){
    this.charactersArray = this.charactersArray.filter(c => c.id !== character.id);
    this.dataService.deleteCharacter(character).subscribe();
  }
  */

}
