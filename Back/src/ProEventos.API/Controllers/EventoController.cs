using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventoController : ControllerBase
    {
        public IEnumerable<Evento> _Evento = new Evento[]
        {
            new()
            {
                EventoId = 1,
                Tema = "Angular 11 e .net 5",
                Local = "Brasil",
                Lote = "1 Lote",
                QtdPessoas = 1,
                DataEvento = DateTime.Now.AddDays(2).ToString(),
                ImagemURL = "Teste"

            },
            new()
            {
                EventoId = 2,
                Tema = "Angular Teste",
                Local = "Brasil",
                Lote = "2 Lote",
                QtdPessoas = 360,
                DataEvento = DateTime.Now.AddDays(3).ToString(),
                ImagemURL = "Teste222"

            }
        };

        public EventoController()
        {
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _Evento;
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
            return _Evento.Where(x => x.EventoId == id);
        }

    }
}
