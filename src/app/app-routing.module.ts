import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContraseniaComponent } from './Pages/contrasenia/contrasenia.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { SobreNosotrosComponent } from './Pages/sobre-nosotros/sobre-nosotros.component';
import { TiendaComponent } from './Pages/tienda/tienda.component';
import { CarritoComponent } from './Pages/carrito/carrito.component';
import { Pagina404Component } from './Pages/pagina404/pagina404.component';
import { InicioComponent } from './Pages/inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contrasenia', component: ContraseniaComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'sobre-nosotros', component: SobreNosotrosComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

