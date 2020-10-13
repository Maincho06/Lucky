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
    public class LibroController : ControllerBase
    {
        LibroBusiness libroObj = new LibroBusiness();
        // GET: api/<LibroController>
        [HttpGet]
        public IEnumerable<Libro> Get()
        {
            return libroObj.GetAllLibro();
        }

        // GET api/<LibroController>/5
        [HttpGet("{id}")]
        public Libro Get(int id)
        {
            return libroObj.GetLibroById(id);
        }

        // POST api/<LibroController>
        [HttpPost]
        public int Post([FromBody] Libro libro)
        {
            return libroObj.AddLibro(libro);
        }

        // PUT api/<LibroController>/5
        [HttpPut]
        public int Put([FromBody] Libro libro)
        {
            return libroObj.UpdateLibro(libro);
        }

        // DELETE api/<LibroController>/5
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            return libroObj.DeleteLibro(id);
        }
    }
}
