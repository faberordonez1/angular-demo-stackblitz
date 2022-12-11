import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.crearFormulario()
  }

  ngOnInit() {
  }

  crearFormulario(){
    this.form= this.fb.group({
      campo:['',Validators.required]
    })

  }

}