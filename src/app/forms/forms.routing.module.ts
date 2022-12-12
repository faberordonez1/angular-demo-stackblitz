import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '', children: [{ path: 'demoHijo', component: DemoComponent }] },
  { path: 'demo', component: DemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //forChild en Module hijo
  exports: [RouterModule],
})
export class FormsRoutingModule {}
