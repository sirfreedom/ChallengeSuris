using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Net;
using System;
using WebApi.Biz;
using WebApi.Entity;
using WebApi.Model;
using System.Collections.Generic;

namespace WebApi.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ReservaController : Controller
    {

        private readonly ILogger<ValuesController> _logger;
        private readonly IConfiguration _configuration;
        private readonly string _ConectionString;

        public ReservaController(ILogger<ValuesController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
            _ConectionString = _configuration.GetConnectionString("DefaultConnection");
        }


        /// <summary>
        /// Inserta Una Reserva
        /// </summary>
        /// <param name="reserva"></param>
        /// <returns>
        /// Devuelve 201 created
        /// </returns>
        [HttpPost]
        [AllowAnonymous]
        public ActionResult Create([FromBody] Reserva reserva)
        {
            ReservaBiz Serv = new ReservaBiz(_ConectionString);
            Reserva oReserva = new Reserva();
            try
            {
                Serv.Insert(oReserva);
            }
            catch (WebException ex)
            {
                return ValidationProblem("Error", "Post", 500, ex.Message);
            }
            catch (Exception ex)
            {
                return ValidationProblem("Error", "Post", 500, ex.Message);
            }
            return Created(); //OK 201
        }


        /// <summary>
        /// Find reservas
        /// </summary>
        /// <returns>
        /// Devuelve todas las reservas con opciones de busqueda
        /// </returns>
        [HttpGet]
        [AllowAnonymous]
        public ActionResult Find()
        {
            List<ReservaModel> lReservaModel = new List<ReservaModel>();
            List<dynamic> lDynamic = new List<dynamic>();
            ReservaBiz Serv = new ReservaBiz(_ConectionString);
            try
            {
                lDynamic = Serv.Find();
                lReservaModel = Reserva.ToList<ReservaModel>(lDynamic);
            }
            catch (WebException ex)
            {
                return ValidationProblem("Error", "Get", 500, ex.Message);
            }
            catch (Exception ex)
            {
                return ValidationProblem("Error", "Get", 500, ex.Message);
            }
            return Ok(new { Reservas = lReservaModel }); //OK 200
        }



    }
}
