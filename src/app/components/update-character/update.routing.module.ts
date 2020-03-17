import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UpdateCharacterComponent} from './update-character/update-character.component';

const routes: Routes = [
  {
    path: ':id',
    component: UpdateCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRoutingModule {
}
