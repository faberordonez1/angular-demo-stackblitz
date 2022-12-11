import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDemoComponent } from './form-demo/form-demo.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [FormDemoComponent],
})
export class FormsModule {}
