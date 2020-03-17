import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ListOfCharactersComponent } from './components/list-of-characters/list-of-characters.component';
import { UpdateCharacterComponent } from './components/update-character/update-character/update-character.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters'
  },
  {
    path: 'characters',
    component: ListOfCharactersComponent
  },
  {
    path: 'create',
    component: CreateCharacterComponent 
  },/*
  {
    path: 'characters/:id',
    component: UpdateCharacterComponent 
  }*/
  {
    path: 'update',
    loadChildren: () => import ('./components/update-character/update-character.module').then(m => m.UpdateCharacterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
