import React from "react";
import CreateUsers from "./CreateUsers";
import UserList from "./UserList";

function UsuarioContainer() {
  return (
    <div>
      <UserList />
      <div>
      <CreateUsers />
    </div>
    </div>
  );
}

export default UsuarioContainer;













// import ListaUsuarios from "./ListaUsuarios";
// import React, { useState } from "react";
// import axios from "axios";

// function CrearUsuarios() {
//   // Estado inicial del usuario
//   const valorInicial = {
//     nombre: "",
//     puntos: 0
//   };

//   // Estado del usuario que se actualiza cada vez que se cambia el valor en un campo de entrada
//   const [usuario, setUsuario] = useState(valorInicial);

//   // Función que captura los datos ingresados en un campo de entrada y actualiza el estado del usuario
//   const capturarDatos = (e) => {
//     const { name, value } = e.target;
//     setUsuario({ ...usuario, [name]: value });
//   };

//   // Función que se ejecuta al enviar el formulario
//   const guardarDatos = async (e) => {
//     e.preventDefault();

//     // Nuevo usuario que se va a enviar al servidor
//     const newUser = {
//       nombre: usuario.nombre,
//       puntos: usuario.puntos
//     };

//     // Envía una solicitud POST al servidor con el nuevo usuario
//     await axios.post("http://localhost:4000/api/usuario", newUser);

//     // Restablece el estado del usuario a su valor inicial
//     setUsuario(valorInicial);
//   };

//   // Componente que se muestra en la pantalla
//   return (
//     <div className="container mt-5">
//       <div className="">
//         <div className="card-body">
//           <form onSubmit={guardarDatos}>
//             {/* Campo de entrada para el nombre del usuario */}
//             <div className="form-group">
//               <label htmlFor="nombre">Nombre del jugador:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Ingrese el nombre del jugador"
//                 required
//                 name="nombre"
//                 value={usuario.nombre}
//                 onChange={capturarDatos}
//               />
//             </div>

//             {/* Campo de entrada para los puntos del usuario */}
//             <div className="form-group">
//               <label htmlFor="puntos">Puntos:</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Ingrese los puntos del jugador"
//                 required
//                 name="puntos"
//                 value={usuario.puntos}
//                 onChange={capturarDatos}
//               />
//             </div>

//             {/* Botón para enviar el formulario */}
//             <button type="submit" className="btn btn-primary">
//               Añadir Jugador
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UsuarioContainer;

