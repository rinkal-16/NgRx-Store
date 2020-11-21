import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducerEffect } from './reducers/tutorial.reducer';
import { TutorialEffects } from './effects/tutorial.effects';

import { ReadComponent } from '../app/read/read.component';
import { CreateComponent } from '../app/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { WriteComponent } from './write/write.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    WriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      tutorial: reducerEffect
    }),
    EffectsModule.forRoot([TutorialEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
