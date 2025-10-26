import axios from "axios";

const BASE_URL = "https://api.github.com";

// ✅ البحث المتقدم باستخدام GitHub Search API
export async function fetchAdvancedUserSearch(username, location, minRepos) {
  try {
    let query = `${username ? username : ""}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
}
