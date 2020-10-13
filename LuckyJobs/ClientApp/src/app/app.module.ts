import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TableAsignaturaComponent } from './components/table-asignatura/table-asignatura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MenuComponent } from './Pages/menu/menu.component';
import { AsignaturaComponent } from './Pages/asignatura/asignatura.component';
import { LibroComponent } from './Pages/libro/libro.component';
import { AgregarLibroComponent } from './Pages/agregar-libro/agregar-libro.component';
import { AgregarAsignaturaComponent } from './Pages/agregar-asignatura/agregar-asignatura.component';
import { FormularioAsignaturaComponent } from './components/formulario-asignatura/formulario-asignatura.component';
import { ActualizarAsignaturaComponent } from './Pages/actualizar-asignatura/actualizar-asignatura.component';
import { TableLibroComponent } from './components/table-libro/table-libro.component';
import { FormularioLibroComponent } from './components/formulario-libro/formulario-libro.component';
import { ActualizarLibroComponent } from './Pages/actualizar-libro/actualizar-libro.component';
import { DetalleAsignaturaComponent } from './Pages/detalle-asignatura/detalle-asignatura.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TableAsignaturaComponent,
    MenuComponent,
    AsignaturaComponent,
    LibroComponent,
    AgregarLibroComponent,
    AgregarAsignaturaComponent,
    FormularioAsignaturaComponent,
    ActualizarAsignaturaComponent,
    TableLibroComponent,
    FormularioLibroComponent,
    ActualizarLibroComponent,
    DetalleAsignaturaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'menu', component: MenuComponent,
        children: [
          {
            path: 'asignatura', component: AsignaturaComponent,
          },
          { path: 'libro', component: LibroComponent },
        ]
      },
      { path: 'agregarAsignatura', component: AgregarAsignaturaComponent },
      { path: 'actualizarAsignatura/:id', component: ActualizarAsignaturaComponent },
      { path: 'detalleAsignatura/:id', component: DetalleAsignaturaComponent },
      { path: 'agregarLibro', component: AgregarLibroComponent },
      { path: 'actualizarLibro/:id', component: ActualizarLibroComponent },
      { path: 'home', component: HomeComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'asignatura', component: TableAsignaturaComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'menu/asignatura' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
