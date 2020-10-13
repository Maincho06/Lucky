import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-libro',
  templateUrl: './actualizar-libro.component.html',
  styleUrls: ['./actualizar-libro.component.css']
})
export class ActualizarLibroComponent implements OnInit {

  id: number;
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id;
  }

}
