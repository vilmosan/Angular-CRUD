import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ListOfCharactersComponent } from './list-of-characters/list-of-characters.component';
import { UpdateCharacterComponent } from './update-character/update-character.component';
import { CharactersRoutingModule } from './characters-routing.module';


@NgModule({
  declarations: [
    ListOfCharactersComponent,
    UpdateCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
