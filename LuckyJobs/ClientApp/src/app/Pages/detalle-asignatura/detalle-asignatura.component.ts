import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '../../services/asignatura-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.component.html',
  styleUrls: ['./detalle-asignatura.component.css']
})
export class DetalleAsignaturaComponent implements OnInit {
  id: number;
  asignatura;
  constructor(private asignaturaService: AsignaturaService, private rutaActiva: ActivatedRoute) {
    this.id = this.rutaActiva.snapshot.params.id;
    console.log(this.rutaActiva.snapshot.params.id);
    this.asignaturaService.getAsignaturaById(this.id).subscribe((data) => {
      console.log(data);
      this.asignatura = data;
    })
  }

  ngOnInit() {
  }

}
