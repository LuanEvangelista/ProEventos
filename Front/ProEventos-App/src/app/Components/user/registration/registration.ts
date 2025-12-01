import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],

  templateUrl: './registration.html',
  styleUrls: ['./registration.scss'],
})
export class Registration {
  form!: FormGroup;

  get f(): any {
    return this.form.controls;
  }

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    this.form = this.fb.group({
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
}
