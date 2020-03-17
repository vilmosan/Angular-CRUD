import { Component, OnInit, Output } from '@angular/core';
import { Character } from '../../models/character.model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.css']
})
export class ListOfCharactersComponent implements OnInit {

  charactersArray:Character[];

  constructor(
    private router: Router,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.dataService
      .getCharacters()
      .subscribe((data: Character[]) => {
        this.charactersArray = data;
    });
  }

  goToUpdate(id: number): void {
    this.router.navigate(['update', id]);
  }

  createCharacter(character:Character): void {
    this.dataService.createCharacter(character).subscribe(character => {
      // Overwrites the ID to be unique
      character.id = Date.now();
      this.charactersArray.push(character);
    });
  }
  
  deleteCharacter(character:Character){
    this.charactersArray = this.charactersArray.filter(c => c.id !== character.id);
    this.dataService.deleteCharacter(character).subscribe();
  }

}
