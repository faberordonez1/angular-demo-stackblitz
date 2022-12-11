import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Componentes
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
