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
              <h3 className="p-5 text-lg font-medium leading-6 text-gray-900">
                Create your recipe and share it to the world!
              </h3>
              <p className="px-5 text-sm text-gray-600">
                "Cooking is like painting or writing a song. Just as there are
                only so many notes or colors, there are only so many
                flavors—it’s how you combine them that sets you apart."
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
                      className="shadow-sm p-2 focus:outline-none focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full border border-gray-300 rounded-md"
                      placeholder="Write a title for your recipe. Something catchy ..."
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
                        className="shadow-sm p-2 focus:outline-none focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
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
                    className="w-full bg-teal-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-cyan-500"
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
