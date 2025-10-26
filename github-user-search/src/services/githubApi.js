import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

// دي الدالة اللي بتجيب بيانات المستخدم
export async function getUser(username) {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
