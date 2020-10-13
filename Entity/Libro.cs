using System;
using System.Collections.Generic;
using System.Text;

namespace Entity
{
    public class Libro
    {
        public int Id_Libro { get; set; }
        public string Descripcion { get; set; }
        public int stock { get; set; }
        public int Id_Asig { get; set; }
        public Asignatura asignatura { get; set; }
    }
}
