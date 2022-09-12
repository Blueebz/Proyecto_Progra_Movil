import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage, 
    children: [
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'configuracion',
        loadChildren: () => import('../configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
      },
      {
        path: 'compras',
        loadChildren: () => import('../compras/compras.module').then( m => m.ComprasPageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then( m => m.MenuPageModule)
      },
      {
        path: 'videojuegos',
        loadChildren: () => import('../videojuegos/videojuegos.module').then( m => m.VideojuegosPageModule)
      },
      {
        path: 'juegomesa',
        loadChildren: () => import('../juegomesa/juegomesa.module').then( m => m.JuegomesaPageModule)
      },
      {
        path: 'figuras',
        loadChildren: () => import('../figuras/figuras.module').then( m => m.FigurasPageModule)
      },
      {
        path: 'preguntas',
        loadChildren: () => import('../preguntas/preguntas.module').then( m => m.PreguntasPageModule)
      },
      {
        path: 'nosotros',
        loadChildren: () => import('../nosotros/nosotros.module').then( m => m.NosotrosPageModule)
      },
      {
        path: 'mis-compras',
        loadChildren: () => import('../mis-compras/mis-compras.module').then(m => m.MisComprasPageModule)
      },
      {
        path:'misdatos',
        loadChildren: () => import('../misdatos/misdatos.module').then(m => m.MisdatosPageModule)
      },
      {
        path:'ajustes',
        loadChildren: () => import('../ajustes/ajustes.module').then(m => m.AjustesPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/inicio',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/inicio',
    pathMatch: 'full'
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
