import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation logic
    if (!username) {
      setErrors("Username is required");
      setSuccess("");
      return;
    }

    if (!email) {
      setErrors("Email is required");
      setSuccess("");
      return;
    }

    if (!password) {
      setErrors("Password is required");
      setSuccess("");
      return;
    }

    setErrors("");
    console.log("User Registered:", { username, email, password });
    setSuccess("✅ Registration successful!");

    // Reset fields
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

      {errors && <p style={{ color: "red" }}>{errors}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
