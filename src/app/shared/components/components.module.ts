import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardDetalleComponent } from './card-detalle/card-detalle.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    CardDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    CardDetalleComponent
  ]
})
export class ComponentsModule { }
