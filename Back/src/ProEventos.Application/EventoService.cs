using ProEventos.Application.Contratos;
using ProEventos.Domain;
using ProEventos.Persistence.Contratos;
using System;
using System.Threading.Tasks;

namespace ProEventos.Application
{
    public class EventoService : IEventoService
    {
        public IGeralPersist _geralPersist { get; }
        public IEventosPersist _eventosPersist { get; }

        public EventoService(IGeralPersist geralPersist, IEventosPersist eventosPersist)
        {
            _geralPersist = geralPersist;
            _eventosPersist = eventosPersist;
        }


        public async Task<Evento> AddEvento(Evento model)
        {
            try
            {
                _geralPersist.Add<Evento>(model);
                if (await _geralPersist.SaveChangesAsync())
                {
                    return await _eventosPersist.GetEventoByIdAsync(model.Id, false);
                }
                return null;
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }

        public async Task<Evento> UpdateEvento(int eventoId, Evento model)
        {
            try
            {
                var evento = await _eventosPersist.GetEventoByIdAsync(eventoId, false);

                if (evento == null)
                    return null;

                model.Id = evento.Id;

                _geralPersist.Update(model);
                if (await _geralPersist.SaveChangesAsync())
                {
                    return await _eventosPersist.GetEventoByIdAsync(model.Id, false);
                }
                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<bool> DeleteEvento(int eventoId)
        {
            try
            {
                var evento = await _eventosPersist.GetEventoByIdAsync(eventoId, false);

                if (evento == null)
                    throw new Exception("Evento para delete não foi encontrado.");

                _geralPersist.Delete<Evento>(evento);

                return await _geralPersist.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Evento[]> GetAllEventosAsync(bool includePalestrante = false)
        {
            try
            {
                var eventos = await _eventosPersist.GetAllEventosAsync(includePalestrante);
                if (eventos == null)
                    return null;

                return eventos;

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrante = false)
        {
            try
            {
                var eventos = await _eventosPersist.GetAllEventosByTemaAsync(tema, includePalestrante);
                if (eventos == null)
                    return null;

                return eventos;

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public async Task<Evento> GetEventoByIdAsync(int eventoId, bool includePalestrante = false)
        {
            try
            {
                var eventos = await _eventosPersist.GetEventoByIdAsync(eventoId, includePalestrante);
                if (eventos == null)
                    return null;

                return eventos;

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }






    }
}
