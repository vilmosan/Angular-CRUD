import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  @Output() addCharacter: EventEmitter<any> = new EventEmitter();

  name:string;
  username:string;
  email:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const character = {
      name: this.name,
      username: this.username,
      email: this.email
    }
    this.addCharacter.emit(character);
  }
}
