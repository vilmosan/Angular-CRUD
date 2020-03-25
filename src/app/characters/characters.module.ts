import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ListOfCharactersComponent } from './list-of-characters/list-of-characters.component';
import { UpdateCharacterComponent } from './update-character/update-character.component';
import { CharactersRoutingModule } from './characters-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ListOfCharactersComponent,
    UpdateCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
