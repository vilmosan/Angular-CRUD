import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../services/data.service';

import { Character } from '../../../models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character:Character;
  @Output() deleteCharacter: EventEmitter<Character> = new EventEmitter();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  onDelete(character) {
    this.deleteCharacter.emit(character);
  }
}
