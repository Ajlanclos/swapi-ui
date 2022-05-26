import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ShipsComponent } from './components/ships/ships.component';

const routes: Routes = [
  {
    path: '',
    component: ShipsComponent,
    data: { label: 'Ship Directory' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { label: 'About' }
  }
  // catch all route with 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
