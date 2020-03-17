import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  @Output() createCharacter: EventEmitter<any> = new EventEmitter();

  name:string;
  username:string;
  email:string;

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    const character = {
      name: this.name,
      username: this.username,
      email: this.email
    }
    this.createCharacter.emit(character);
    
  }
}
