using System.Collections.Generic;
using WebApi.Entity;

namespace WebApi.Data
{
    public class ServicioData : IListRepository<Servicio>
    {

        private readonly IRepository<Servicio> _context;

        public ServicioData(IRepository<Servicio> context)
        {
            _context = context;
        }

        public string EntityName
        {
            get { return _context.EntityName; }
        }

        public List<Servicio> List()
        {
            return _context.List();
        }
    }
}
