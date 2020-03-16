import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfCharactersComponent } from './components/list-of-characters/list-of-characters.component';
import { SingleCharacterComponent } from './components/single-character/single-character.component'


@NgModule({
  declarations: [
    AppComponent,
    ListOfCharactersComponent,
    SingleCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
