const mongoose = require("mongoose");

// Define la URL de tu base de datos
const url = 'mongodb://127.0.0.1:27017/mi-base-de-datos';

// Realiza la conexión con la base de datos
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión exitosa a la base de datos');
}).catch((error) => {
  console.error('Error al conectar con la base de datos:', error);
});



