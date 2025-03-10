using System.Collections.Generic;
using WebApi.Data;
using WebApi.Entity;

namespace WebApi.Biz
{
    public class ReservaBiz
    {
         
        private string _ConectionString = string.Empty;

        public ReservaBiz(string ConectionString)
        {
            _ConectionString = ConectionString;
        }

        public List<dynamic> Find()
        {
            IFindRepository Serv = new ReservaData(new ContextSQL<Reserva>(_ConectionString));
            List<dynamic> lReserva = new List<dynamic>();
            lReserva = Serv.Find(new Dictionary<string, string>());
            return lReserva;
        }

        public void Insert(Reserva reserva) 
        {
            ICreateRepository<Reserva> Serv = new ReservaData(new ContextSQL<Reserva>(_ConectionString));
            Serv.Insert(reserva);
        }

    }
}
