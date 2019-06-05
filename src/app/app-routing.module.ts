import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BookListComponent} from './book-list/book-list.component';
import {MushroomComponent} from './anime/mushroom/mushroom.component';
import {DemoOneComponent} from './anime/demo-one/demo-one.component'
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'test', component: BookListComponent },
  { path: 'mushroom', component: MushroomComponent },
  { path: 'demo1', component: DemoOneComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
