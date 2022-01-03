import React from "react";
import RecipeForm from "./recipe_form/RecipeForm";

import { useDispatch } from "react-redux";
import { createRecipe } from "../../redux/actions/recipes";

export default function RecipeCreate() {
  const dispatch = useDispatch();

  const handleFormSubmit = (formData) => {
    dispatch(createRecipe(formData));
  };

  return (
    <div>
      <RecipeForm
        buttonLabel="Create"
        editMode={false}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
