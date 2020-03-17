import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCharacterComponent } from './update-character/update-character.component';
import { FormsModule } from '@angular/forms';
import { UpdateRoutingModule } from './update.routing.module';

@NgModule({
  declarations: [
    UpdateCharacterComponent
  ],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    FormsModule
  ]
})
export class UpdateCharacterModule { }
