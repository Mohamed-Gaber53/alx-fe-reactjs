import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 py-6">
        🍽️ Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600">{recipe.summary}</p>

              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
