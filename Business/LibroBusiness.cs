using Data;
using Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business
{
    public class LibroBusiness
    {
        LibroData libroData = new LibroData();

        public IEnumerable<Libro> GetAllLibro()
        {
            return libroData.GetAllLibro();
        }

        public Libro GetLibroById(int id)
        {
            return libroData.GetLibroById(id);
        }

        public int AddLibro(Libro libro)
        {
            return libroData.AddLibro(libro);
        }

        public int UpdateLibro(Libro libro)
        {
            return libroData.UpdateLibro(libro);
        }

        public int DeleteLibro(int id)
        {
            return libroData.DeleteLibro(id);
        }
    }
}
