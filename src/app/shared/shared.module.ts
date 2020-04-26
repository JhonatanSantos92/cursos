import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { DetalleComponent } from '../core/page/detalle/detalle.component';
import { CardDetalleComponent } from './components/card-detalle/card-detalle.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    CardDetalleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    CardDetalleComponent,
    FooterComponent
  ]
})
export class SharedModule { }
