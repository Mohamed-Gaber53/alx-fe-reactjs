import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { getUser } from "./services/githubApi";

export default function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setError("");
    setUser(null);
    try {
      const data = await getUser(username);
      setUser(data);
    } catch (err) {
      setError("User not found 😢");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}
