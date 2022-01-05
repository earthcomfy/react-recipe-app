import RecipeCard from "./RecipeCard";

const recipes = [
  {
    title: "The Chocolate Cake",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80",
    desc: "The classic burger is an all time BBQ favourite! This super easy homemade beef burger recipe gives you delicious patties.",
    href: "#",
  },
  {
    title: "The Chocolate Cake",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80",
    desc: "The classic burger is an all time BBQ favourite! This super easy homemade beef burger recipe gives you delicious patties.",
    href: "#",
  },
  {
    title: "The Chocolate Cake",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80",
    desc: "The classic burger is an all time BBQ favourite! This super easy homemade beef burger recipe gives you delicious patties.",
    href: "#",
  },
];

export default function SavedRecipes() {
  return (
    <>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Saved Recipes
          </h2>
          <RecipeCard recipes={recipes} quickview={false} />
        </div>
      </div>
    </>
  );
}
