import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login//login/login.component';
import { CharacterComponent } from './components/character/character/character.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListOfCharactersComponent } from './components/list-of-characters/list-of-characters/list-of-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CharacterComponent,
    AddCharacterComponent,
    ListOfCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
