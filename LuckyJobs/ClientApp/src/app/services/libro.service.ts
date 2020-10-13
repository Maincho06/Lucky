import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  myAppUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getAllLibro() {
    const urlTemp = this.myAppUrl + 'api/Libro';
    return this.http.get(urlTemp);
  }

  getLibroById(id) {
    const urlTemp = this.myAppUrl + 'api/Libro/' + id;
    return this.http.get(urlTemp);
  }



  saveLibro(libro) {
    console.log(libro);
    const urlTemp = this.myAppUrl + 'api/Libro';
    return this.http.post(urlTemp, libro);
  }

  updateLibro(libro) {
    const urlTemp = this.myAppUrl + 'api/Libro';
    return this.http.put(urlTemp, libro);
  }

  deleteLibro(id) {
    const urlTemp = this.myAppUrl + 'api/Libro/' + id;
    return this.http.delete(urlTemp);
  }

}
