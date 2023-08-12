import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { default as routesIndex} from './routes';

const routes: Routes = routesIndex;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
