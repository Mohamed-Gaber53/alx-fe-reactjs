import { useState } from "react";
import { fetchAdvancedUserSearch } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchAdvancedUserSearch(username, location, minRepos);
      setUsers(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-400 text-center">
        🔍 GitHub Advanced User Search
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-2xl space-y-4"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Min Repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-32 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all font-semibold"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="mt-6 text-yellow-400">Loading...</p>}

      {/* Error */}
      {error && (
        <p className="mt-6 text-red-400">Looks like we cant find the user</p>
      )}

      {/* Results */}
      <div className="mt-8 grid gap-6 w-full max-w-3xl">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-blue-500/30 transition-shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <p className="text-sm text-gray-400">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Profile
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
