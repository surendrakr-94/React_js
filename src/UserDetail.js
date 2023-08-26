import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetail = () => {
  const [user, setUsers] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios
      .get(`http://localhost:3001/users/${id}`)

      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container py-3">
      <Link className="btn btn-danger" to="/">
        Back to Home Page
      </Link>
      <h1 className="display-4">User id:{id}</h1>
      <br></br>
      <ul className="list-group w-50">
        <li className="list-group--item">Name: {user.name}</li>
        <li className="list-group--item">Email: {user.email}</li>
        <li className="list-group--item">phone :{user.phone}</li>
      </ul>
    </div>
  );
};

export default UserDetail;
