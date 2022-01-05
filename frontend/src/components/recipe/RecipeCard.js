import { HeartIcon, BookmarkIcon } from "@heroicons/react/outline";

export default function RecipeCard({ recipes }) {
  return (
    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <div
          key={recipe.name}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <div className="p-5">
            <div className="flex items-center">
              <div className="w-0 flex-1">
                <dl>
                  <dt>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                        className="object-cover w-full h-48"
                        alt=""
                      />
                    </div>
                  </dt>
                  <div className="mt-4 flex justify-between md:mt-2">
                    <dt className="text-lg font-medium text-gray-500 truncate">
                      {recipe.name}
                    </dt>
                    <dt className="text-xs font-light border border-gray-200 p-1 rounded-lg text-gray-500 truncate">
                      by Hana
                    </dt>
                  </div>
                  <dd>
                    <div className="text-sm text-gray-900">
                      The classic burger is an all time BBQ favourite! This
                      super easy homemade beef burger recipe gives you delicious
                      patties.
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <a
                href={recipe.href}
                className="font-medium text-cyan-700 hover:text-cyan-900"
              >
                View detail
              </a>
            </div>

            <div className="flex space-x-2">
              <button type="button">
                <HeartIcon
                  className="h-6 w-6 text-gray-400 "
                  aria-hidden="true"
                />
              </button>

              <div className="w-px h-6 bg-gray-400" />
              <button type="button">
                <BookmarkIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
