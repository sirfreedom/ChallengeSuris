using System;

namespace WebApi.Entity
{
    public class Reserva : EntityBase
    {

        public int IdCliente { get; set; }
        public int IdServicio { get; set; }
        public DateTime Fecha { get; set; }

    }
}
