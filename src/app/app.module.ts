import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImaginaryKidsComponent } from './imaginary-kids/imaginary-kids.component';
import { TypesComponent } from './imaginary-kids/types/types.component';
import { OutdoorComponent } from './imaginary-kids/types/outdoor/outdoor.component';
import { IndoorComponent } from './imaginary-kids/types/indoor/indoor.component';
import { NamesComponent } from './imaginary-kids/names/names.component';

@NgModule({
  declarations: [
    AppComponent,
    ImaginaryKidsComponent,
    TypesComponent,
    OutdoorComponent,
    IndoorComponent,
    NamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
