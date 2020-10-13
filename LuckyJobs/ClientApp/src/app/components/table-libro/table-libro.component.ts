import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { LibroService } from '../../services/libro.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2'
import { AsignaturaService } from '../../services/asignatura-service.service';

@Component({
  selector: 'app-table-libro',
  templateUrl: './table-libro.component.html',
  styleUrls: ['./table-libro.component.css']
})
export class TableLibroComponent implements OnInit {
  @Input() idAsignatura;
  displayedColumns: string[] = ['id', 'descripcion', 'stock', 'asignatura', 'Opciones'];
  dataSource;
  listLocal;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator
  constructor(private libroService: LibroService, private route: Router, private asignaturaService: AsignaturaService) {
  }

  ngOnInit() {
    if (this.idAsignatura) { //Si envía parametro buscamos por asignatura
      this.getLibroByAsignaturaId(this.idAsignatura);
    } else { //Si no envía ningún parametro obtiene todo
      this.getLibro();
    }
  }

  getLibro() {
    this.libroService.getAllLibro().subscribe((resp: any[]) => {
      this.listLocal = resp;
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
    })
  }

  getLibroByAsignaturaId(id) {
    this.libroService.getAllLibro().subscribe((resp: any[]) => {
      this.listLocal = resp.filter((libro) => libro.asignatura.id_asig === id );
      this.dataSource = new MatTableDataSource(this.listLocal);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  actualizarLibro(id) {
    this.route.navigateByUrl(`actualizarLibro/${id}`);
  }

  deleteLibro(id,nombre) {
    Swal.fire({
      title: 'Estás seguro?',
      text: `Usted está eliminando al libro ${nombre}`,
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
        this.libroService.deleteLibro(id).subscribe((resp) => {
          console.log(resp);
          this.retirarList(id);
        })
        Swal.fire(
          'Eliminado',
          'El libro fue eliminado',
          'success'
        )
      }
    })
  }

  retirarList(id: number) {
    this.listLocal = this.listLocal.filter((libro) => libro.id_Libro !== id);
    this.dataSource.data = this.listLocal;
  }

}
