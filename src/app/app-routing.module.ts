import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lights-off', pathMatch: 'full' },
  { path: 'lights-off', loadChildren: () => import('./lights-off/lights-off.module').then(m => m.LightsOffModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
