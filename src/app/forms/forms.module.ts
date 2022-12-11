import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { FormsRoutingModule } from './forms.routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsRoutingModule],
  declarations: [FormDemoComponent],
})
export class FormsModule {}
