import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
//styles
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        />
      </label>
      <label>
        <span>password:</span>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        />
      </label>
      {/* <button>login</button> */}

      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
export default Login;
