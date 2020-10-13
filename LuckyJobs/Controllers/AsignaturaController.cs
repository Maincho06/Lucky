using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business;
using Entity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LuckyJobs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AsignaturaController : ControllerBase
    {
        AsignaturaBusiness asignaturaObj = new AsignaturaBusiness();
        // GET: api/<AsignaturaController>
        [HttpGet]
        public IEnumerable<Asignatura> Get()
        {
            return asignaturaObj.GetAllAsignatura();
        }

        [HttpGet]
        [Route("api/Asignatura/GetLibrosByAsignaturaId/{id}")]
        public IEnumerable<Libro> GetLibrosByAsignaturaId(int id)
        {
            return asignaturaObj.GetLibrosByAsignaturaId(id);
        }

        // GET api/<AsignaturaController>/5
        [HttpGet("{id}")]
        //[Route("api/Asignatura/GetAsignaturaById/{id}")]
        public Asignatura Get(int id)
        {
            return asignaturaObj.GetAsignaturaById(id);
        }

        // POST api/<AsignaturaController>
        [HttpPost]
        public int Post([FromBody] Asignatura asignatura)
        {
            return asignaturaObj.AddAsignatura(asignatura);
        }

        // PUT api/<AsignaturaController>/5
        [HttpPut]
        public int Put([FromBody] Asignatura asignatura)
        {
            return asignaturaObj.UpdateAsignatura(asignatura);
        }

        // DELETE api/<AsignaturaController>/5
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            return asignaturaObj.DeleteAsignatura(id);
        }
    }
}
