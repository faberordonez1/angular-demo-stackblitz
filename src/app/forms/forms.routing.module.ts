import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDemoComponent } from './form-demo/form-demo.component';

const routes: Routes = [
  { path: '', children: [{ path: 'demo', component: FormDemoComponent }] },
  { path: 'demo1', component: FormDemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
