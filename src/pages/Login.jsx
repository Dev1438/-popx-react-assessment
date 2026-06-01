import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!email.trim() || !password.trim()) {
      alert("All fields are required");
      return;
    }

    if (!user) {
      alert("Please create an account first");
      return;
    }

    if (
      email === user.email &&
      password === user.password
    ) {
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="page">
      <h1>Signin to your PopX account</h1>

      <p>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>

      <div className="input-group">
        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
      </div>

      <div className="input-group">
        <label>Password</label>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
      </div>

      <button
        className="login-btn"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;