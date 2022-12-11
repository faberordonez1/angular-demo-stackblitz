import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms.module').then((m) => m.FormsModule), //Dinamic Import para Lazyload
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forRoot en main Module
  exports: [RouterModule],
})
export class AppRoutingModule {}
