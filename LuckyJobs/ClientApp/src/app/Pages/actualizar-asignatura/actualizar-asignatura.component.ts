import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-asignatura',
  templateUrl: './actualizar-asignatura.component.html',
  styleUrls: ['./actualizar-asignatura.component.css']
})
export class ActualizarAsignaturaComponent implements OnInit {

  id: number;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id;
  }

}
