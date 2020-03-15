import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';

import { Character } from '../../../models/character.model';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.css']
})
export class ListOfCharactersComponent implements OnInit {

  characterArray:Character[];

  constructor(
    private dataService:DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.getCharacters().subscribe(characterArray => {
      this.characterArray = characterArray;
    });
  }

  goToDetails(characterId: string) {
    this.router.navigate(['details', characterId]);
  }


  

}
