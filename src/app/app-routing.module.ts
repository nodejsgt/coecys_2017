import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ExpositorComponent } from './components/expositor/expositor.component';
import { ExpositorsListComponent } from './components/expositors-list/expositors-list.component';
import { ExpositorTalleresComponent } from './components/expositor-talleres/expositor-talleres.component';
import { ExpositorUpdateComponent  } from './components/expositor-update/expositor-update.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'expositors',
    component: ExpositorsListComponent
  },
  {
    path: 'expositors/:name',
    component: ExpositorComponent
  },
  {
    path: 'expositors/update/:name',
    component: ExpositorUpdateComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/expositors',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
