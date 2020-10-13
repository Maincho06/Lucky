import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignaturaService } from '../../services/asignatura-service.service';
import Swal from 'sweetalert2'
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-formulario-asignatura',
  templateUrl: './formulario-asignatura.component.html',
  styleUrls: ['./formulario-asignatura.component.css']
})
export class FormularioAsignaturaComponent implements OnInit {

  @Input() typeForm: string; //1 Create, 2 Update
  @Input() id: number;
  forma: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private asignaturaService: AsignaturaService) {
    this.crearFormulario();
  }

  get descripcionNoValido() {
    return this.forma.get('descripcion').invalid && this.forma.get('descripcion').touched;
  }

  ngOnInit() {
    if (this.typeForm.toString() === '2') {
      this.asignaturaService.getAsignaturaById(this.id).subscribe((data: any) => {
        this.cargarDataAlformulario(data);
      })
    }
  }

  crearFormulario() {
    this.forma = this.fb.group({
      Id_asig: 0,
      descripcion: ['', Validators.required],
      estado: ['1']
    });
  }

  async save() {
    let mensaje: string;
    console.log(this.forma);
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }
    if (this.typeForm.toString() === "1") {
      this.asignaturaService.saveAsignatura(this.forma.value).subscribe((data) => {
        console.log(data);
      });
      mensaje = 'La asignatura se registró exitosamente';
    } else {
      this.asignaturaService.updateAsignatura(this.forma.value).subscribe((data) => {
        console.log(data);
      })
      mensaje = 'La asignatura se actulizó exitosamente';
    }
    await Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigateByUrl('menu/asignatura');
  }

  cargarDataAlformulario(asignatura) {
    this.forma.setValue({
      Id_asig: asignatura.id_asig,
      descripcion: asignatura.descripcion,
      estado: asignatura.estado === "True" ? '1' : '0'
    });

  }

}
