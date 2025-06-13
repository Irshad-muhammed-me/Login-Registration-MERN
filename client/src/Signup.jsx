import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    if (name.trim() === "") {
      setError("Name is required");
      return;
    }
    if (email.trim() === "") {
      setError("Email is required");
      return;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 letters");
      return;
    }

    
    setError("");
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setError("Registration failed. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-50">
        <h2 className="text-center">Register</h2>

       
        {error && <div className="text-danger ms-2">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong className="p-2 d-inline-block">Name</strong>
            </label>
            <input
              type="text"
              id="name"
              className="form-control rounded-3"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong className="p-2 d-inline-block">Email</strong>
            </label>
            <input
              type="text"
              id="email"
              className="form-control rounded-3"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong className="p-2 d-inline-block">Password</strong>
            </label>
            <input
              type="password"
              id="password"
              className="form-control rounded-3"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-25 d-flex justify-content-center align rounded-3 d-block mx-auto"
          >
            Register
          </button>
        </form>

        <Link
          to="/login"
          className="text-decoration-none d-block text-primary mt-3"
        >
          Already Have an Account?
        </Link>
      </div>
    </div>
  );
};

export default Signup;
