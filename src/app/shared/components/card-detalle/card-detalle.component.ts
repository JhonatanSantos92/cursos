import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-detalle',
  templateUrl: './card-detalle.component.html',
  styleUrls: ['./card-detalle.component.scss']
})
export class CardDetalleComponent implements OnInit {

  @Input() title: string;
  @Input() section: string;
  @Input() listaclases: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
