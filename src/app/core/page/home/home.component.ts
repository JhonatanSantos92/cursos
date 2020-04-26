import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../service/curso.service';
import { Curso } from 'src/app/shared/interfaces/curso.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cursos: Curso[] = [];
  brand: string;
  logo: string;

  constructor(
    private cs: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.logo = 'favicon.ico';
    this.brand = 'Cursos';
    this.cs.getCursos().subscribe(
      res => {
        this.cursos = res;
      }
    );
  }

  irCursoDetalle(id: string, title?: string, logo?: string) {
    this.router.navigate(['detalleCurso', id]);
  }
}
