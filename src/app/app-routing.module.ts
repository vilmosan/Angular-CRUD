import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters'
  },
  {
    path: 'characters',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/list-of-characters/list-of-characters.module').then(m => m.ListOfCharactersModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
