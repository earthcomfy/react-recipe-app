import React from "react";
import RecipeForm from "./recipe_form/RecipeForm";

import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { editRecipe } from "../../redux/actions/recipes";

export default function RecipeEdit() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { recipes, is_loading } = useSelector((state) => state.recipes);

  const recipe = recipes.filter((recipe) => recipe.id === parseInt(id));

  const handleFormSubmit = (formData) => {
    dispatch(editRecipe(id, formData));
  };

  return (
    <div>
      <RecipeForm
        buttonLabel="Update"
        handleFormSubmit={handleFormSubmit}
        editMode={true}
        recipe={recipe}
      />
    </div>
  );
}
