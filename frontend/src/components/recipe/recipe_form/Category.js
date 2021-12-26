import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";

const categories = [
  {
    id: 1,
    title: "Appetizer",
    description: "Appetizer Appetizer Appetizer Appetizer Appetizer",
    users: "50 recipes",
  },
  {
    id: 2,
    title: "Dessert",
    description: "Dessert Dessert Dessert Dessert Dessert Dessert",
    users: "100 recipes",
  },
  {
    id: 3,
    title: "Main Dish",
    description: "Main Dish Main Dish Main Dish Main Dish Main Dish",
    users: "270 recipes",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Category() {
  const [selectedcategories, setSelectedcategories] = useState(categories[0]);

  return (
    <RadioGroup value={selectedcategories} onChange={setSelectedcategories}>
      <RadioGroup.Label className="text-lg leading-6 font-medium text-gray-900">
        Select a food category
      </RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {categories.map((category) => (
          <RadioGroup.Option
            key={category.id}
            value={category}
            className={({ checked, active }) =>
              classNames(
                checked ? "border-transparent" : "border-gray-300",
                active ? "ring-2 ring-indigo-500" : "",
                "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <div className="flex-1 flex">
                  <div className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {category.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-500"
                    >
                      {category.description}
                    </RadioGroup.Description>
                    <RadioGroup.Description
                      as="span"
                      className="mt-6 text-sm font-medium text-gray-900"
                    >
                      {category.users}
                    </RadioGroup.Description>
                  </div>
                </div>
                <CheckCircleIcon
                  className={classNames(
                    !checked ? "invisible" : "",
                    "h-5 w-5 text-indigo-600"
                  )}
                  aria-hidden="true"
                />
                <div
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-indigo-500" : "border-transparent",
                    "absolute -inset-px rounded-lg pointer-events-none"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
