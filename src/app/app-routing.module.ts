import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule),
  },
  {
    path: 'alone',
    loadComponent: () => import('./alone/pages/alone-page/alone-page.component').then(m => m.AlonePageComponent), //con eso se importa de manera peresosa un standalone compoments
  },
  { path: '**', redirectTo: 'maps' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
