import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/page/home/home.component';
import { DetalleComponent } from './core/page/detalle/detalle.component';
import { NotfoundComponent } from './core/page/notfound/notfound.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'detalleCurso/:id', component: DetalleComponent },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
