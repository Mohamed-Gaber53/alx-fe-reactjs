import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("⚠️ Please fill in all fields");
      setSuccess("");
      return;
    }

    setError("");
    console.log("User Registered:", { username, email, password });
    setSuccess("✅ Registration successful!");

    // إعادة التعيين
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Controlled Form</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
