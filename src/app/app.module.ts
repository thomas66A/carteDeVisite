import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpParams} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './components/app.component';
import { CardsComponent } from './components/cards.component';
import { CreerComponent } from './components/creer.component';
import { HomeComponent } from './components/home.component';
import { OneCardComponent } from './components/oneCard.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BackgroundColorChange } from './directives/backgroundColorChange.directive';
import { LetterColorChange } from './directives/letterColorChange.directive';
import {  appRoutes } from './route';

@NgModule({
  declarations: [
    HighlightDirective,
    BackgroundColorChange,
    LetterColorChange,
    AppComponent,
    CardsComponent,
    HomeComponent,
    CreerComponent,
    OneCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
