import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ListOfCharactersComponent } from './components/list-of-characters/list-of-characters.component';


const routes: Routes = [
  {
    path: '',
    component: ListOfCharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
