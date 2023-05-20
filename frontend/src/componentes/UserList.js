import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/user");
        const data = res.data;
        setList(data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  const deleteUsers = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/user/${id}`);
      setList((prevLista) => prevLista.filter((item) => item._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: '18rem' }}>
        {list.map((List) => {
          return (
            <div className="d-flex align-items-center justify-content-between border-bottom" key={List._id}>
              <p className="m-0">{List.name}</p>
              <button className="btn btn-primary" onClick={() => deleteUsers(List._id)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );  
    };
  export default UserList;
 
