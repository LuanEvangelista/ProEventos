using Microsoft.AspNetCore.Mvc;
using ProEventos.Application.Contratos;
using ProEventos.Domain;
using System;
using System.Threading.Tasks;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventosController : ControllerBase
    {
        public IEventoService _eventoService { get; }

        public EventosController(IEventoService eventoService)
        {
            _eventoService = eventoService;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var eventos = await _eventoService.GetAllEventosAsync(true);
                if (eventos == null)
                    return NotFound("Não há eventos cadastrados.");

                return Ok(eventos);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Ocorreu um erro interno ao recuperar os eventos. Por favor, tente novamente mais tarde ou contate o suporte. Erro: {ex}");

            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var evento = await _eventoService.GetEventoByIdAsync(id, true);
                if (evento == null)
                    return NotFound($"Evento com id {id} não encontrado.");

                return Ok(evento);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Ocorreu um erro interno ao recuperar o evento. Por favor, tente novamente mais tarde ou contate o suporte. Erro: {ex}");

            }
        }

        [HttpGet("{tema}/tema")]
        public async Task<IActionResult> GetByTema(string tema)
        {
            try
            {
                var evento = await _eventoService.GetAllEventosByTemaAsync(tema, true);
                if (evento == null)
                    return NotFound($"Nenhum evento encontrado para o tema '{tema}'.");

                return Ok(evento);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Ocorreu um erro interno ao recuperar eventos por tema. Por favor, tente novamente mais tarde ou contate o suporte. Erro: {ex}");

            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Evento model)
        {
            try
            {
                var evento = await _eventoService.AddEvento(model);
                if (evento == null)
                    return BadRequest("Não foi possível adicionar o evento. Verifique os dados enviados e tente novamente.");


                return Ok(evento);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Ocorreu um erro interno ao adicionar o evento. Por favor, tente novamente mais tarde ou contate o suporte. Erro: {ex}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Evento model)
        {
            try
            {
                var evento = await _eventoService.UpdateEvento(id, model);
                if (evento == null)
                    return BadRequest("Não foi possível atualizar o evento. Verifique os dados enviados e tente novamente.");


                return Ok(evento);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Ocorreu um erro interno ao atualizar o evento. Por favor, tente novamente mais tarde ou contate o suporte. Erro: {ex}");

            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                if (await _eventoService.DeleteEvento(id))
                    return Ok("Evento removido com sucesso.");

                return BadRequest("Não foi possível remover o evento. Verifique se o id está correto e tente novamente.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Ocorreu um erro interno ao remover o evento. Por favor, tente novamente mais tarde ou contate o suporte. Erro: {ex}");
            }
        }


    }
}
