import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfCharactersComponent} from './list-of-characters/list-of-characters.component';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ListOfCharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListofCharactersRoutingModule {
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ListOfCharactersModule { }
