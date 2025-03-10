using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Entity;

namespace WebApi.Data
{
    public class ReservaData : ICreateRepository<Reserva>, IFindRepository
    {

        private readonly IRepository<Reserva> _context;

        public ReservaData(IRepository<Reserva> context)
        {
            _context = context;
        }

        public string EntityName
        {
            get { return _context.EntityName; }
        }

        public List<dynamic> Find(Dictionary<string, string> lParam)
        {
            return _context.Find(lParam);
        }

        public void Insert(Reserva entity)
        {
            
        }

       
    }
}
