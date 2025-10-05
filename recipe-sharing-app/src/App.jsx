// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "20px" }}>
              <h1>Recipe Sharing App</h1>
              <AddRecipeForm />
              <FavoritesList />
              <RecommendationsList />
              <RecipeList />
            </div>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper to extract recipeId from URL and pass to RecipeDetails
import { useParams } from "react-router-dom";
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

export default App;
