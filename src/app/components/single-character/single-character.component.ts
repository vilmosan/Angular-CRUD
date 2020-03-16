import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {

  @Input() character:Character;
  @Output() deleteCharacter:EventEmitter<Character> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(character){
    this.deleteCharacter.emit(character);
  }

}
