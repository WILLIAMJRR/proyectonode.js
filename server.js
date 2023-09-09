require('dotenv').config();

const app = require('./app');


//!7
const db = require('./database/db.config');

//autenticacion con la base de datos
db.authenticate()

  .then(() => {
    console.log('Conexion exitosa 🐊');
  })

  .catch((err) => {
    console.log('No se conecto');
  });

//sincronizar la base de datos hace que se sincronice con mi aplicacion
//si alguno de kis registros de las tablas no se sincronoza forzarla solo en modo de desarrollo {force:true}
db.sync()
  .then(() => {
    console.log('Base de datos sincronizada 🤖');
  })
  .catch((err) => {
    console.log('No se sincronizo');
  });

  const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
