import Category from "./Category";
import Ingredients from "./Ingredients";
import Procedure from "./Procedure";
import TimePicker from "./TimePicker";
import PictureUpload from "./PictureUpload";

import { useState } from "react";
import { useSelector } from "react-redux";

export default function RecipeCreate(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { category, ingredients, procedures, cook_time, picture } = useSelector(
    (state) => state.forms
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("category.name", category);
    formData.append("picture", picture, picture.name);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("cook_time", cook_time);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("procedure", JSON.stringify(procedures));

    props.handleFormSubmit(formData);
  };

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Recipe Form
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleFormSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <h1 className="text-lg leading-6 font-medium text-gray-900">
                      Title
                    </h1>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full rounded-md pt-2.5"
                      placeholder="Write a title..."
                      defaultValue={
                        props.editMode ? props.recipe[0].title : null
                      }
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <h1 className="text-lg leading-6 font-medium text-gray-900">
                      Description
                    </h1>
                    <div className="mt-1">
                      <textarea
                        id="desc"
                        name="desc"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Write a short description..."
                        defaultValue={
                          props.editMode ? props.recipe[0].desc : null
                        }
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Write a short and precise description abour your recipe.
                    </p>
                  </div>
                  <Category editMode={props.editMode} recipe={props.recipe} />
                  <Ingredients
                    editMode={props.editMode}
                    recipe={props.recipe}
                  />
                  <Procedure editMode={props.editMode} recipe={props.recipe} />
                  <TimePicker editMode={props.editMode} recipe={props.recipe} />
                  <PictureUpload />
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {props.buttonLabel}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
