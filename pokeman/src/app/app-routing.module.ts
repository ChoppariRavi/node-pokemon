import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './components/about/about.component';

 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CardComponent },
  { path: 'about', component: AboutComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}