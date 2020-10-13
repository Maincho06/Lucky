using Entity;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Data
{
    public class LibroData
    {
        string connectionString = Connection.connectionString;

        public IEnumerable<Libro> GetAllLibro()
        {
            AsignaturaData asignatura = new AsignaturaData();
            try
            {
                List<Libro> lLibro = new List<Libro>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetAllLibro", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Libro libro = new Libro();
                        libro.Id_Libro = Convert.ToInt32(reader["Id_libro"]);
                        libro.Descripcion = reader["descripcion"].ToString();
                        libro.stock = Convert.ToInt32(reader["stock"]);
                        libro.asignatura = asignatura.GetAsignaturaById(Convert.ToInt32(reader["Id_asig"]));
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

        public Libro GetLibroById(int id)
        {
            AsignaturaData asignatura = new AsignaturaData();
            try
            {
                Libro libro = new Libro();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetLibroById", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id_libro", id);
                    con.Open();
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        libro.Id_Libro = Convert.ToInt32(reader["Id_libro"]);
                        libro.Descripcion = reader["descripcion"].ToString();
                        libro.stock = Convert.ToInt32(reader["stock"]);
                        libro.asignatura = asignatura.GetAsignaturaById(Convert.ToInt32(reader["Id_asig"]));
                    }

                    con.Close();
                }
                return libro;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public int AddLibro(Libro libro) {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spInsertLibro", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@Descripcion", libro.Descripcion);
                    cmd.Parameters.AddWithValue("@Stock", libro.stock);
                    cmd.Parameters.AddWithValue("@Id_asig", libro.Id_Asig);

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

        public int UpdateLibro(Libro libro)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spUpdateLibro", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@Id_libro", libro.Id_Libro);
                    cmd.Parameters.AddWithValue("@Descripcion", libro.Descripcion);
                    cmd.Parameters.AddWithValue("@Stock", libro.stock);
                    cmd.Parameters.AddWithValue("@Id_Asig", libro.Id_Asig);
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


        public int DeleteLibro(int id)
        {
            AsignaturaData asignatura = new AsignaturaData();
            try
            {
                Libro libro = new Libro();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteLibro", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id_Libro", id);
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
