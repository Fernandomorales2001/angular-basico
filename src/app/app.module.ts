import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Heroesmodule } from './heroes/heroes.module';
import { Contadormodule } from './contador/contado.module';

@NgModule({
  declarations: [
    AppComponent,
    Heroesmodule,
    Contadormodule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
