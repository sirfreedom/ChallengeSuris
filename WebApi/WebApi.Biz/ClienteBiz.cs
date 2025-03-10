using System;
using System.Collections.Generic;
using WebApi.Data;
using WebApi.Entity;

namespace WebApi.Biz
{
    public  class ClienteBiz
    {

        private string _ConectionString = string.Empty;

        public ClienteBiz(string ConectionString)
        {
            _ConectionString = ConectionString;
        }

        public List<Cliente> List()
        {
            IListRepository<Cliente> Serv = new ClienteData(new ContextSQL<Cliente>(_ConectionString));
            return Serv.List();
        }

    }
}
