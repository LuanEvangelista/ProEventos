import { Component, OnInit, TemplateRef, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../../../services/evento.service';
import { Evento } from '../../models/Evento';
import { DateTimeFormatPipe } from '../../helpers/DateTimeFormat.pipe';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { TitulosComponent } from '../../shared/Titulos/Titulos.component';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DateTimeFormatPipe,
    TooltipDirective,
    ModalModule,
    NgxSpinnerModule,
    TitulosComponent,
  ],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.scss'],
})
export class Eventos implements OnInit {
  modalRef?: BsModalRef;

  // USE SIGNALS
  public eventos = signal<Evento[]>([]);
  public mostrarImagem = signal(true);
  private _filtroLista = signal('');

  // Getter/Setter para filtroLista (compatível com ngModel)
  public get filtroLista(): string {
    return this._filtroLista();
  }

  public set filtroLista(value: string) {
    this._filtroLista.set(value);
  }

  // Computed signal para filtrar automaticamente
  public eventosFiltrados = computed(() => {
    const filtro = this._filtroLista().toLocaleLowerCase();
    const todosEventos = this.eventos();

    if (!filtro) return todosEventos;

    return todosEventos.filter(
      (evento: Evento) =>
        evento.tema.toLocaleLowerCase().indexOf(filtro) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtro) !== -1
    );
  });

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  public ngOnInit(): void {
    this.getEventos();
  }

  public alterarImagem(): void {
    this.mostrarImagem.update((v) => !v);
  }

  public getEventos(): void {
    this.spinner.show();

    this.eventoService.getEventos().subscribe({
      next: (_eventos: Evento[]) => {
        this.eventos.set(_eventos);
        // Aguarda 3 segundos antes de esconder o spinner (para visualização)
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      },
      error: (error) => {
        console.error('❌ Erro ao carregar eventos:', error);
        // Aguarda 3 segundos antes de esconder o spinner mesmo com erro
        setTimeout(() => {
          this.spinner.hide();
          this.toastr.error('Erro ao carregar eventos');
        }, 1000);
      },
    });
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
