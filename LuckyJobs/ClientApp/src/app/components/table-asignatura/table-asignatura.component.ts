import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AsignaturaService } from '../../services/asignatura-service.service';
import { Route, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-table-asignatura',
  templateUrl: './table-asignatura.component.html',
  styleUrls: ['./table-asignatura.component.css']
})
export class TableAsignaturaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'descripcion', 'estado','Opciones'];
  dataSource;
  listLocal;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator
  constructor(private asignaturaService: AsignaturaService, private route: Router) { }

  ngOnInit() {
    this.getAsignatura();
  }

  getAsignatura() {
    this.asignaturaService.getAsignatura().subscribe((resp: any[]) => {
      this.listLocal = resp;
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
    });
  }

  agregarAsignatura() {
    console.log('Veamos');
    this.route.navigateByUrl('agregarAsignatura');
  }

  actualizarAsignatura(id: number) {
    this.route.navigateByUrl(`actualizarAsignatura/${id}`);
  }

  verDetalle(id: number) {
    this.route.navigateByUrl(`detalleAsignatura/${id}`);
  }

  eliminarAsignatura(id: number) {
    Swal.fire({
      title: '¿Desea eliminar esta asignatura?',
      text: 'Se eliminarán todos los libros que tenga esta asignatura',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.asignaturaService.deleteAsignatura(id).subscribe((resp) => {
          this.retirarLista(id);
        })
        Swal.fire(
          'Eliminado',
          'El libro fue eliminado',
          'success'
        )
      }
    })
  }

  retirarLista(id: number) {
    this.listLocal = this.listLocal.filter((item) => item.id_asig !== id);
    this.dataSource.data = this.listLocal;
  }

}
