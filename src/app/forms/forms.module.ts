import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms.routing.module';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsRoutingModule],
  declarations: [DemoComponent],
})
export class FormsModule {}
