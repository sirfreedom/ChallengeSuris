using System.Collections.Generic;
using WebApi.Entity;

namespace WebApi.Data
{
    public class ClienteData : IListRepository<Cliente>
    {

        private readonly IRepository<Cliente> _context;

        public ClienteData(IRepository<Cliente> context)
        {
            _context = context;
        }

        public string EntityName
        {
            get { return _context.EntityName; }
        }

        public List<Cliente> List()
        {
            return _context.List();
        }
    }
}
