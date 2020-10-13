import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  myAppUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getAsignatura() {
    const urlTemp = this.myAppUrl + 'api/Asignatura';
    return this.http.get(urlTemp);
  }

  getAsignaturaById(id) {
    const urlTemp = this.myAppUrl + 'api/Asignatura/' + id;
    return this.http.get(urlTemp);
  }

  getLibrosByAsignaturaId(id) {
    const urlTemp = this.myAppUrl + 'api/Asignatura/GetLibrosByAsignaturaId/' + id;
    return this.http.get(urlTemp);
  }

  saveAsignatura(asignatura) {
    const urlTemp = this.myAppUrl + 'api/Asignatura';
    return this.http.post(urlTemp, asignatura);
  }

  updateAsignatura(asignatura) {
    const urlTemp = this.myAppUrl + 'api/Asignatura';
    return this.http.put(urlTemp, asignatura);
  }

  deleteAsignatura(id) {
    const urlTemp = this.myAppUrl + 'api/Asignatura/' + id;
    return this.http.delete(urlTemp);
  }

}
