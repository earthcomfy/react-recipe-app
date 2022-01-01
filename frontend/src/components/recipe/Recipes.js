import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions/recipes";

import QuickView from "./QuickView";

export default function Recipes() {
  const dispatch = useDispatch();
  const { recipes, is_loading } = useSelector((state) => state.recipes);

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  if (!recipes || recipes.length === 0)
    return (
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-15">
        <p className="text-3xl text-center text-gray-700">
          Can not find any recipes, sorry (:
        </p>
      </div>
    );

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
          <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
            <a href="/" aria-label="Item" className="mr-3">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-indigo-600"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
              <span className="inline-block mb-2">The brown fox</span>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-indigo-600 scale-x-30 group-hover:scale-x-100" />
            </h2>
          </div>
          <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
            "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
            accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
            perspiciatis unde omnis iste."
          </p>
        </div>
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
          {recipes.map((recipe, idx) => {
            return (
              <div key={idx} className="relative group">
                <div
                  aria-label="View Item"
                  className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2 hover:cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    setId(recipe.id);
                  }}
                >
                  <div className="flex flex-col h-full">
                    <img
                      src={recipe.picture}
                      className="object-cover w-full h-48"
                      alt=""
                    />
                    <div className="flex-grow border border-t-0 rounded-b">
                      <div className="p-5">
                        <h6 className="mb-2 font-semibold leading-5">
                          {recipe.title}
                        </h6>
                        <p className="text-sm text-gray-900">
                          {recipe.desc.substr(0, 100)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>
        </div>
      </div>
      {open && <QuickView open={open} setOpen={setOpen} id={id} />}
    </>
  );
}
