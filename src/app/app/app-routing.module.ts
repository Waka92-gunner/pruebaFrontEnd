import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListapeliculasComponent } from '../app/vistas/listapeliculas/listapeliculas.component';
import {LoginComponent} from '../app/vistas/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:ListapeliculasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
