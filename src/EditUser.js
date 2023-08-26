import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",

    email: "",
    phone: "",
  });

  const { name, email, phone } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios
      .put(`http://localhost:3001/users/${id}`, user)

      .then((res) => {
        console.log(res);
        navigate("/");
        alert("Updated successfully.");
      })
      .catch((err) => console.log(err));
  };

  //

  //   loadding by id

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="d-flex w-100 justify-conten-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1> user add</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-2">
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form control"
              placeholder="Enter the Name"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">email</label>
            <input
              type="text"
              name="email"
              value={email}
              className="form control"
              placeholder="Enter the Email"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              className="form control"
              placeholder="Enter the Phone"
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-success" type="submit">
            Update
          </button>
          <Link to="/" className="btn btn-danger">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
