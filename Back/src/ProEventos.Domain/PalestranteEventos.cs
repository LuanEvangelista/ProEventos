namespace ProEventos.Domain
{
    public class PalestranteEventos
    {
        public int PalestranteId { get; set; }

        public Palestrante Palestrante { get; set; }
        public int EventoId { get; set; }
        public Evento Evento { get; set; }
    }
}
