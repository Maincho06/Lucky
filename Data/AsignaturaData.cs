using Entity;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Data
{
    public class AsignaturaData
    {
        string connectionString = Connection.connectionString;
        public IEnumerable<Asignatura> GetAllAsignatura()
        {
            try
            {
                List<Asignatura> lAsignatura = new List<Asignatura>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetAllAsignatura",con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Asignatura asignatura = new Asignatura();
                        asignatura.Id_asig = Convert.ToInt32(reader["Id_asig"]);
                        asignatura.Descripcion = reader["descripcion"].ToString();
                        asignatura.Estado = reader["estado"].ToString();
                        lAsignatura.Add(asignatura);
                    }
                    con.Close();
                }
                return lAsignatura;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public IEnumerable<Libro> GetLibrosByAsignaturaId(int id)
        {
            try
            {
                List<Libro> lLibro = new List<Libro>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetLibrosByAsignaturaId", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id_asig", id);
                    con.Open();
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Libro libro = new Libro();
                        libro.Id_Libro = Convert.ToInt32(reader["Id_libro"]);
                        libro.Descripcion = reader["descripcion"].ToString();
                        libro.stock = Convert.ToInt32(reader["stock"]);
                        libro.asignatura = GetAsignaturaById(Convert.ToInt32(reader["Id_asig"]));
                        lLibro.Add(libro);
                    }
                    con.Close();
                }
                return lLibro;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Asignatura GetAsignaturaById(int id)
        {
            try
            {
                Asignatura asignatura = new Asignatura();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetAsignaturaById", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id_asig", id);
                    con.Open();
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        asignatura.Id_asig = Convert.ToInt32(reader["Id_asig"]);
                        asignatura.Descripcion = reader["descripcion"].ToString();
                        asignatura.Estado = reader["estado"].ToString();
                    }
                    con.Close();
                }
                return asignatura;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public int AddAsignatura(Asignatura asignatura)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spInsertAsignatura", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@Descripcion", asignatura.Descripcion);
                    cmd.Parameters.AddWithValue("@Estado", Convert.ToInt32( asignatura.Estado));

                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int UpdateAsignatura(Asignatura asignatura)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spUpdateAsignatura", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@Id_asig", asignatura.Id_asig);
                    cmd.Parameters.AddWithValue("@Descripcion", asignatura.Descripcion);
                    cmd.Parameters.AddWithValue("@Estado", asignatura.Estado);

                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int DeleteAsignatura(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteAsignatura", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id_asig", id);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch (Exception)
            {
                throw;
            }
        }

        
    }
}
