import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

function StartGame() {
  const [users, setUsers] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [scores, setScores] = useState({});
  const [pointsAdd, setPointsAdd] = useState(0);
  const [pointsSubtract, setPointsSubtract] = useState(0);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalSubtract, setModalSubtract] = useState(false);

  

  const loadScores = async () => {
    const newPuntajes = {};
    for (const user of users) {
      // const res = await axios.get(
      //   `http://localhost:4000/api/usuario/${user._id}/puntaje`
      // );
      // newPuntajes[user._id] = res.data;
    }
    setScores(newPuntajes);
  };

  const handleChangeSelect = (e) => {
    setSelectValue(e.target.value);
  };

  const handleClickAdd = () => {
    if (selectValue) {
      const newScores = { ...scores };
      const currentPuntaje = newScores[selectValue] || 0;
      newScores[selectValue] = currentPuntaje + pointsAdd;
      setScores(newScores);
      setPointsAdd(0);
      setModalAdd(false);
    }
  };

  const handleClickSubtract = () => {
    if (selectValue) {
      const newScores = { ...scores };
      const currentPuntaje = newScores[selectValue] || 0;
      newScores[selectValue] = currentPuntaje - pointsSubtract;
      setScores(newScores);
      setPointsSubtract(10);
      setModalSubtract(false);
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      const res = await axios.get("http://localhost:4000/api/user");
      setUsers(res.data);
    };
    loadUsers();
  }, []);

  useEffect(() => {
    loadScores();
  }, [users]);

  return (
    <>
      {users.length > 0 && (
        <div className="mt-4 d-flex flex-wrap align-items-center">
        <div className="me-3 mr-50 mb-2">
          <label htmlFor="jugadores">Seleccionar jugador:</label>
          <select
            id="jugadores"
            className="form-control"
            value={selectValue}
            onChange={handleChangeSelect}
          >
            
            <option>Seleccionar jugador</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name} - Puntaje: {scores[user._id] || 0}
              </option>
              
            ))}
            
          </select>
          
        </div>
        <div className="me-3 mt-4 ml-10">
          <button
            className="btn btn-primary"
            onClick={() => setModalAdd(true)}
          >
            Registrar
          </button>
        </div>
        <div>
          <button
            className="btn btn-success mt-4"
            onClick={() => setModalSubtract(true)}
          >
            Dominó
          </button>
        </div>
      </div>
      
      )}

      <Modal show={modalAdd} style={{ maxWidth: "250px" }}>
        <div className="modal-body">
          <label htmlFor="puntos-sumar">Puntos a sumar:</label>
          <input
            id="puntos-sumar"
            type="number"
            value={pointsAdd}
            onChange={(e) => setPointsAdd (parseInt(e.target.value))}
          />
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={() => setModalAdd(false)}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClickAdd}
          >
            Aceptar
          </button>
        </div>
      </Modal>

      <Modal show={modalSubtract} style={{ maxWidth: "250px" }}>
        <div class="modal-body">
          <div className="mt-3">
            <label htmlFor="puntos-restar">Puntos a restar:</label>
            <input
              id="puntos-restar"
              type="number"
              value={pointsSubtract}
              onChange={(e) => setPointsSubtract(parseInt(e.target.value))}
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => setModalSubtract(false)}
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleClickSubtract}
            >
              Aceptar
            </button>
          </div>
        </div>
      </Modal>

      
  <table className="table mt-4">
      <thead>
        <tr>
          <th scope="col">Jugador</th>
          <th scope="col">Puntos</th>
        </tr>
      </thead>
      <tbody>
        {users.map((usuario) => (
          <tr key={usuario._id}>
            <td>{usuario.name}</td>
            <td>{scores[usuario._id] || 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default StartGame;
