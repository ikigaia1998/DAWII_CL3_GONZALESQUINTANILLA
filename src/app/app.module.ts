// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule
import { AppComponent } from './app.component';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component';
import { NotasComponent } from './notas/notas.component';
import {RickAndMortyComponent} from './rickandmorty/rickandmorty.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    EstacionamientoComponent,
    NotasComponent,
    RickAndMortyComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'estacionamiento', component: EstacionamientoComponent },
      { path: 'notas', component: NotasComponent },
      { path: 'rickandmorty', component: RickAndMortyComponent  },
      { path: '', redirectTo: '/estacionamiento', pathMatch: 'full' }
    ])
    //AppRoutingModule // Agrega AppRoutingModule a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
