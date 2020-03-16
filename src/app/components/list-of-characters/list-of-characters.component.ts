import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.css']
})
export class ListOfCharactersComponent implements OnInit {

  charactersArray:Character[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getCharacters().subscribe(charactersArray => {
      this.charactersArray = charactersArray;
    });
  }

  deleteCharacter(character:Character){
    this.charactersArray = this.charactersArray.filter(c => c.id !== character.id);
    this.dataService.deleteCharacter(character).subscribe();
  }

}
