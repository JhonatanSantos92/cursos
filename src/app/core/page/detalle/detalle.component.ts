import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../service/curso.service';
import { DetalleCurso } from 'src/app/shared/interfaces/curso.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  detalleCurso: DetalleCurso[] = [];
  brand: string;
  logo: string;

  constructor(
    private cs: CursoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.logo = 'favicon.ico';
    this.brand = 'Detalle';

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.cs.getCursoById(Number(id)).subscribe(
      res => {
        this.logo = res.img;
        this.brand = res.title;
      }
    );
    this.cs.getDetalleCurso(id).subscribe(
      res => {
        this.detalleCurso = res;
      }
    );
  }

}
