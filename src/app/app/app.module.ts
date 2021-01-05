import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListapeliculasComponent } from './vistas/listapeliculas/listapeliculas.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './vistas/login/login.component';

import {ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListapeliculasComponent,
    HeaderComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
