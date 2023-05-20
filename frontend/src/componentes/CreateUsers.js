import React, { useState } from "react";
import axios from "axios";

function CreateUsers() {
  const initialValue = {
    name: ""
  };

  const [user, setUser] = useState(initialValue);

  const captureData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const saveData = async (e) => {
    e.preventDefault();
    const newUser = {
      name: user.name 
    };
    await axios.post("http://localhost:4000/api/user", newUser);
    setUser(initialValue);
  };

  const userChange = () => {
    window.open("http://localhost:3000/start-game");
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <div className="card-body">
          <form onSubmit={saveData} className="d-flex align-items-center">
            <div className="form-group ">
              <div className="text-center">
                <label htmlFor="nombre"></label>
                <input
                  type="text"
                  className="card2"
                  placeholder="Nombre del jugador"
                  required
                  name="name"
                  value={user.name}
                  onChange={captureData}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-info ">
              Añadir Jugador
            </button>
          </form>
        </div>
      </div>
      <div className="text-center">
        <button type="button" className="botonEnv" onClick={userChange}>
          Empezar
        </button>
      </div>
    </div>
  );
}

export default CreateUsers;
