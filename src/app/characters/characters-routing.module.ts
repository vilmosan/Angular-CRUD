import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfCharactersComponent } from './list-of-characters/list-of-characters.component';
import { UpdateCharacterComponent } from './update-character/update-character.component';


const routes: Routes = [
  {
    path: 'characters',
    component: ListOfCharactersComponent,
    data: { animation: 'characters' }
  },
  {
    path: 'character/:id',
    component: UpdateCharacterComponent,
    data: { animation: 'character' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
