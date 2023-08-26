import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios
      .get("http://localhost:3001/users")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  };
  const deleteUser = async (id) => {
    const res = await axios
      .delete(`http://localhost:3001/users/${id}`)
      .then((res) => {
        console.log(res);
        alert("delete successfully.");
        loadUser();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <h1> Home pages</h1>
        <table class="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link class="btn btn-success m-2" to={`/user/${user.id}`}>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </Link>
                  <Link
                    className="btn btn-primary m-2"
                    to={`/user/edit/${user.id}`}
                  >
                    edit
                  </Link>

                  <Link
                    className="btn btn-danger m-2"
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
