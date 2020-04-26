import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { DetalleComponent } from './page/detalle/detalle.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { ServiceModule } from '../service/service.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    DetalleComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    ServiceModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    DetalleComponent,
    NotfoundComponent
  ]
})
export class CoreModule { }
