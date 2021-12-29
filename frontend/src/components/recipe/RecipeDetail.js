import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailRecipe } from "../../redux/actions/recipes";

export default function RecipeDetail() {
  const dispatch = useDispatch();
  const { detailRecipe } = useSelector((state) => state.recipes);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailRecipe(id));
  }, []);

  if (!detailRecipe || detailRecipe.length === 0)
    return (
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-15">
        <p className="text-3xl text-center text-gray-700">
          Can not find any recipes, sorry (:
        </p>
      </div>
    );

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">This is the detail view</span>
          </span>
        </h2>
      </div>

      <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
        <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
          <div className=" h-full">
            <img
              src={detailRecipe.picture}
              className="object-cover w-full h-48"
              alt=""
            />
            {detailRecipe.title}
          </div>
        </div>
      </div>
    </div>
  );
}
