import axios from "axios";

// ✅ دالة البحث المتقدمة
export const fetchUserData = async (query, location, minRepos) => {
  try {
    // بناء الرابط بالـ parameters
    let searchQuery = query;

    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos) {
      searchQuery += `+repos:>${minRepos}`;
    }

    // ✅ API endpoint الصحيح
    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchQuery}`
    );

    return response.data.items; // GitHub بيرجع النتائج في .items
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
