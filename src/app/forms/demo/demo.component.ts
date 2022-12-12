import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit() {}

  crearFormulario() {
    this.form = this.fb.group({
      campo: ['', Validators.required],
      camposArray: new FormArray([]),
    });
    this.crearArrayControls();
  }

  get camposArray() {
    return this.form.controls.camposArray as FormArray;
  }

  crearArrayControls() {
    [1, 2, 3].forEach((numero) =>
      this.camposArray.push(new FormControl(true, Validators.required))
    );

    this.crearControlDinamico();
  }

  crearControlDinamico() {
    let nombreControl = 'controlDinamico';
    this.form.addControl(
      nombreControl,
      new FormControl(`ValorInicial`, Validators.required)
    );

    this.form.addControl(
      'controlDinamico2',
      new FormControl(`ValorInicial`, Validators.required)
    );
    console.log(this.form.controls);
  }
}
