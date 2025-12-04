import { Component, OnInit } from '@angular/core';
import { TitulosComponent } from '../../../shared/Titulos/Titulos.component';
import { AbstractControlOptions, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorField } from '@app/helpers/ValidatorField';


@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  imports: [TitulosComponent,ReactiveFormsModule,FormsModule],
})
export class PerfilComponent implements OnInit {
  form!: FormGroup;

  get f(): any {
    return this.form.controls;
  }

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.validation();
  }

  public validation(): void {
    const formOption: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmarSenha'),
    };

    this.form = this.fb.group(
      {
        titulo: ['', Validators.required],
        primeiroNome: ['', Validators.required],
        ultimoNome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telefone: ['', Validators.required],
        funcao: ['', Validators.required],
        descricao: ['', Validators.required],
        senha: ['', Validators.required],
        confirmarSenha: ['', Validators.required],
      },
      formOption
    );
  }
}
