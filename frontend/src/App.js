import { Route, Routes } from "react-router-dom";
import "./App.css";


import UsuariosContainer from "./componentes/UsuarioContainer";
import StartGame from "./componentes/StartGame";
import CreateUsers from "./componentes/CreateUsers";
import UserList from "./componentes/UserList";

function App() {
  return (
    <div className="">
      <h1 className="contaiones p-4 ">
        <b>Domin App</b>
      </h1>
      <Routes>
        <Route path="/" element={<UsuariosContainer />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/start-game" element={<StartGame />} />
        <Route path="/edit/:id" element={<CreateUsers />} />
      </Routes>
    </div>
  );
}

export default App;
