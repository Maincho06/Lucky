import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  agregarLibro() {
    this.route.navigateByUrl('agregarLibro');
  }

}
