import { Component, OnInit, TemplateRef, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../models/Evento';
import { DateTimeFormatPipe } from '../helpers/DateTimeFormat.pipe';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, FormsModule, DateTimeFormatPipe, TooltipDirective, ModalModule],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.scss'],
})
export class Eventos implements OnInit {
  modalRef?: BsModalRef;

  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];

  public mostrarImagem: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: Evento) =>
        evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) {}

  public ngOnInit(): void {
    this.getEventos();
  }

  public alterarImagem(): void {
    this.mostrarImagem = !this.mostrarImagem;
  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.eventosFiltrados = _eventos;
      },
      (error) => {
        console.error('Erro ao carregar eventos:', error);
      }
    );
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('Evento excluído com sucesso!');
  }

  decline(): void {
    this.modalRef?.hide();
  }
}
