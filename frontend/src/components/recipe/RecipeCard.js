import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HeartIcon, BookmarkIcon } from "@heroicons/react/outline";
import { likeRecipe, saveRecipe } from "../../redux/actions/recipes";

import QuickView from "./QuickView";

export default function RecipeCard({ recipes, quickview }) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.title}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="w-0 flex-1">
                  <dl>
                    <dt>
                      <div>
                        <img
                          src={recipe.picture}
                          className="object-cover w-full h-48"
                          alt=""
                        />
                      </div>
                    </dt>
                    <div className="mt-4 flex justify-between md:mt-2">
                      <dt className="text-lg font-medium text-gray-500 truncate">
                        {recipe.title}
                      </dt>
                      <dt className="text-xs font-light border border-gray-200 p-1 rounded-lg text-gray-500 truncate">
                        by {recipe.username}
                      </dt>
                    </div>
                    <dd>
                      <div className="text-sm text-gray-900">{recipe.desc}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-gray-50 px-5 py-3">
              <div className="text-sm">
                {quickview ? (
                  <button
                    className="font-medium text-teal-700 hover:text-teal-900"
                    onClick={() => {
                      setOpen(true);
                      setId(recipe.id);
                    }}
                  >
                    Quick View
                  </button>
                ) : (
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="font-medium text-teal-700 hover:text-teal-900"
                  >
                    View detail
                  </Link>
                )}
              </div>

              <div className="flex space-x-2">
                <button type="button">
                  <HeartIcon
                    className="h-6 w-6 text-gray-400 "
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(likeRecipe(id));
                    }}
                  />
                </button>

                <div className="w-px h-6 bg-gray-400" />
                <button type="button">
                  <BookmarkIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(saveRecipe(recipe.author, id));
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <nav
        className="bg-white mt-10 px-4 pt-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">20</span> results
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <a
            href="/"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="/"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </a>
        </div>
      </nav>
      {open && <QuickView open={open} setOpen={setOpen} id={id} />}
    </>
  );
}
