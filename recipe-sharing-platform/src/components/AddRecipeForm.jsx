import { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, // ✅ target.value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientsList = formData.ingredients.split(",").map((i) => i.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients = "Please include at least two ingredients.";
      }
    }

    if (!formData.steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Recipe added successfully! 🎉");
    setFormData({ title: "", ingredients: "", steps: "" });
    setErrors({});
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-2/5 bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Add a New Recipe 🍽️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Recipe Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Chocolate Cake"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Ingredients</label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="Separate ingredients with commas"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
            <textarea
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              placeholder="Describe the preparation process..."
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
