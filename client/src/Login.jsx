import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setError("Email is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email");
      return;
    }
    if (password.trim().length < 6) {
      setError("Password must be at least 6 letters");
      return;
    }

    setError("");
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else {
          setError("Invalid credentials.");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="text-center">Login</h2>


        {error && <div className="text-danger ms-2">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong className="p-1 d-inline-block">Email</strong>
            </label>
            <input
              type="email"
              id="email"
              className="form-control rounded-3"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong className="p-1 d-inline-block">Password</strong>
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
            className="btn btn-primary w-50 rounded-3 d-block mx-auto mb-2"
          >
            Login
          </button>
        </form>

        <Link
          to="/register"
          className="text-decoration-none p-2 d-block text-center text-primary"
        >
          Does not have an account?
        </Link>
      </div>
    </div>
  );
};

export default Login;
