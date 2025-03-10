using System;
using System.Collections.Generic;
using WebApi.Data;
using WebApi.Entity;


namespace WebApi.Biz
{
    public class ServicioBiz
    {

        private string _ConectionString = string.Empty;

        public ServicioBiz(string ConectionString)
        {
            _ConectionString = ConectionString;
        }

        public List<Servicio> List() 
        {
            IListRepository<Servicio> Serv = new ServicioData(new ContextSQL<Servicio>(_ConectionString));
            return Serv.List();
        }


    }
}
