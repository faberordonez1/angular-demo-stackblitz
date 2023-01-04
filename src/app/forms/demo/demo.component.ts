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
      campo: ['', [Validators.minLength(5)]], // COn minLength se omite el required
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
    console.log('Form creado');
    console.log(this.form.controls);
  }

  validarCampo() {
    console.log('Validando Campos con keypress');
    console.log('Vaslidadores', this.form.controls.campo.validator);
    console.log('Errores', this.form.controls.campo.errors);
  }
}
