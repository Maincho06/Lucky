import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignaturaService } from '../../services/asignatura-service.service';
import Swal from 'sweetalert2'
import { LibroService } from '../../services/libro.service';
@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css']
})
export class FormularioLibroComponent implements OnInit {

  @Input() typeForm: string; //1 Create, 2 Update
  @Input() id: number;
  forma: FormGroup;
  listAsignatura;
  constructor(private fb: FormBuilder, private router: Router, private asignaturaService: AsignaturaService, private libroService: LibroService) {
    this.crearFormulario();
    this.asignaturaService.getAsignatura().subscribe((resp) => {
      this.listAsignatura = resp;
    })
  }

  ngOnInit() {
    if (this.typeForm.toString() === '2') {
      this.libroService.getLibroById(this.id).subscribe((data: any) => {
        this.cargarDataAlformulario(data);
      })
    }
  }

  get descripcionNoValido() {
    return this.forma.get('descripcion').invalid && this.forma.get('descripcion').touched;
  }

  get stockNoValido() {
    return this.forma.get('stock').invalid && this.forma.get('stock').touched;
  }


  crearFormulario() {
    this.forma = this.fb.group({
      Id_Libro: 0,
      descripcion: ['', Validators.required],
      stock: ['', Validators.required ],
      Id_Asig: -1
    });
  }

  async save() {
    let mensaje: string;
    if (this.forma.value.Id_asig === '-1') {
      return Swal.fire({
        icon: 'warning',
        title: 'Alerta',
        text: 'Por favor, escoja una asignatura',
      })
    }
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }
    let result = {
      "Id_Libro": this.forma.value.Id_Libro,
      "descripcion": this.forma.value.descripcion,
      "stock": this.forma.value.stock,
      "Id_Asig": Number(this.forma.value.Id_Asig)
    };
    if (this.typeForm.toString() === "1") {
      this.libroService.saveLibro(result).subscribe((data) => {
        console.log(data);
      })
      mensaje = 'El libro se registró exitosamente';
    } else {
      this.libroService.updateLibro(result).subscribe((data) => {
        console.log(data);
      })
      mensaje = 'El libro se actualizó exitosamente';
    }
    
    await Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigateByUrl('menu/libro');
  }

  cargarDataAlformulario(libro) {
    console.log(libro);
    this.forma.setValue({
      "Id_Libro": libro.id_Libro,
      "descripcion": libro.descripcion,
      "stock": libro.stock,
      "Id_Asig": libro.asignatura.id_asig
    });

  }

}
