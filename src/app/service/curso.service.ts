import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Curso, DetalleCurso } from '../shared/interfaces/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
    private http: HttpClient
  ) { }

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${environment.url}subjects.json`);
  }

  getCursoById(id: number): Observable<Curso> {
    return this.http.get<Curso[]>(`${environment.url}subjects.json`)
    .pipe(
      map( res => res[id - 1])
    );
  }

  getDetalleCurso(id: string): Observable<DetalleCurso[]> {
    return this.http.get<DetalleCurso[]>(`${environment.url}subject/${id}.json`);
  }
}
