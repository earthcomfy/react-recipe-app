import RecipeCard from "./RecipeCard";

const recipes = [
  {
    name: "The Chocolate Cake",
    href: "#",
  },
  {
    name: "The Chocolate Cake",
    href: "#",
  },
  {
    name: "The Chocolate Cake",
    href: "#",
  },
];

export default function MyRecipes() {
  return (
    <>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            My Recipes
          </h2>
          <RecipeCard recipes={recipes} />
        </div>
      </div>
    </>
  );
}
