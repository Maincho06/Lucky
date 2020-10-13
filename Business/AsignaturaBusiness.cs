using Data;
using Entity;
using System;
using System.Collections.Generic;

namespace Business
{
    public class AsignaturaBusiness
    {
        AsignaturaData asignaturaData = new AsignaturaData();
        public IEnumerable<Asignatura> GetAllAsignatura()
        {
            return asignaturaData.GetAllAsignatura(); 
        }

        public IEnumerable<Libro> GetLibrosByAsignaturaId(int id)
        {
            return asignaturaData.GetLibrosByAsignaturaId(id);
        }

        public Asignatura GetAsignaturaById(int id)
        {
            return asignaturaData.GetAsignaturaById(id);
        }

        public int AddAsignatura(Asignatura asignatura)
        {
            return asignaturaData.AddAsignatura(asignatura);
        }

        public int UpdateAsignatura(Asignatura asignatura)
        {
            return asignaturaData.UpdateAsignatura(asignatura);
        }

        public int DeleteAsignatura(int id)
        {
            return asignaturaData.DeleteAsignatura(id);
        }
    }
}
