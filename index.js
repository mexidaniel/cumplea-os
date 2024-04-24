const express = require('express');
const sql = require('mssql');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Configurar CORS
app.use(cors({
  origin: ['http://tomorrowmex.com', 'http://127.0.0.1:5500'], // Añade otros dominios según sea necesario
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

const config = {
  server: 'sql.bsite.net\\MSSQL2016',
  database: 'dgonzalezmu_prueba1',
  user: 'dgonzalezmu_prueba1',
  password: 'Prueba12',
  options: {
    enableArithAbort: false,
  },
};


app.post('/agregarTelefono', async (req, res) => {
  try {
    const { telefono } = req.body;
    const pool = await sql.connect(config);
    const query = `INSERT INTO foreverrockstars (telefono) VALUES ('${telefono}')`;
    await pool.query(query);
    res.json({ success: true, message: 'Número de teléfono agregado con éxito' });
    await pool.close();
  } catch (error) {
    console.error('Error al agregar el número de teléfono:', error);
    res.status(500).json({ success: false, message: 'Error al agregar número de teléfono' });
  }
});


app.post('/borrarTelefono', async (req, res) => {
  try {
    const { telefono } = req.body;
    const pool = await sql.connect(config);
    const query = `DELETE FROM foreverrockstars WHERE telefono = '${telefono}'`;
    await pool.query(query);
    res.json({ success: true, message: 'Número de teléfono borrado con éxito' });
    await pool.close();
  } catch (error) {
    console.error('Error al borrar el número de teléfono:', error);
    res.status(500).json({ success: false, message: 'Error al borrar número de teléfono' });
  }
});



async function testConnection() {
  try {
    const pool = await sql.connect(config);
    console.log('Conexión exitosa a la base de datos.');

    // Realizar otras operaciones aquí si es necesario

    // Realizar una consulta a la base de datos
    const result = await pool.query('SELECT * FROM foreverrockstars');
    // Comentario: No se muestra en la consola el resultado de la consulta

    // Cerrar la conexión
    await pool.close();
  } catch (err) {
    console.error('Error al conectar con la base de datos:', err);
    console.error('Detalles adicionales:', err.originalError ? err.originalError : '');
  }
}


// Ruta para actualizar el nombre y el vip en la base de datos
app.post('/updateUsuario', async (req, res) => {
  try {
    const { telefono, nombre, vip } = req.body; // Asume que el cuerpo de la solicitud contiene estos tres valores
    const pool = await sql.connect(config);
    const query = `UPDATE foreverrockstars SET nombre = '${nombre}', vip = '${vip}' WHERE telefono = '${telefono}'`;
    await pool.query(query);
    res.json({ success: true, message: 'Usuario actualizado con éxito' });
    await pool.close();
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ success: false, message: 'Error al actualizar usuario' });
  }
});



// Ruta para obtener los datos de la tabla
app.get('/getDatosTabla', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.query('SELECT * FROM foreverrockstars');
    res.json(result.recordset);
    await pool.close();
  } catch (error) {
    console.error('Error al obtener los datos de la tabla:', error);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

// Ruta para verificar si el número de teléfono existe en la base de datos
// Ruta para verificar si el número de teléfono existe y si el nombre es null
app.get('/checkTelefono/:telefono', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const telefono = req.params.telefono;
    const result = await pool.query(`SELECT nombre FROM foreverrockstars WHERE telefono = '${telefono}'`);
    
    if (result.recordset.length > 0) {
      const nombre = result.recordset[0].nombre;

      // Si nombre no es null, entonces ya está en el line up
      if (nombre !== null) {
        res.json({ exists: true, inLineUp: true });
      } else {
        res.json({ exists: true, inLineUp: false });
      }
    } else {
      res.json({ exists: false });
    }

    await pool.close();
  } catch (error) {
    console.error('Error al verificar el número de teléfono:', error);
    res.status(500).json({ error: 'Error al verificar número de teléfono' });
  }
});


app.get('/getNombresPorVip/:vip', async (req, res) => {
  try {
      const vip = req.params.vip;
      console.log(`Recibida petición para obtener nombres VIP de tipo: ${vip}`);
      const pool = await sql.connect(config);
      const result = await pool.query(`SELECT nombre FROM foreverrockstars WHERE vip = '${vip}'`);
      console.log(`Nombres encontrados para ${vip}:`, result.recordset);
      res.json(result.recordset.map(record => record.nombre));
      await pool.close();
  } catch (error) {
      console.error(`Error al obtener los nombres para vip ${vip}:`, error);
      res.status(500).json({ error: 'Error al obtener nombres por vip' });
  }
});


app.post('/updateField', async (req, res) => {
  try {
      const { id, fieldName, newValue } = req.body;
      const pool = await sql.connect(config);
      const query = `UPDATE foreverrockstars SET ${fieldName} = '${newValue}' WHERE id = '${id}'`;
      await pool.query(query);
      res.json({ success: true, message: 'Campo actualizado con éxito' });
      await pool.close();
  } catch (error) {
      console.error('Error al actualizar el campo:', error);
      res.status(500).json({ success: false, message: 'Error al actualizar el campo' });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  // Llamar a la función para probar la conexión
  testConnection();
});
