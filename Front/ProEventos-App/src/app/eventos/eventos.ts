import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';


@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.scss']
})
export class Eventos {
  public eventos: any;

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/Eventos').subscribe (
      response => this.eventos = response,
      error =>console.log(error),
    )

  
  }

  ngOnInit(): void {
    this.getEventos();
  }

  constructor(private http: HttpClient) { }
}

