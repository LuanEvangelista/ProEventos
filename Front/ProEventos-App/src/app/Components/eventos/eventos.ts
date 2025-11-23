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
import { RouterOutlet } from "@angular/router";

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
    RouterOutlet
],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.scss'],
})
export class Eventos implements OnInit {
  ngOnInit(): void {}
}
