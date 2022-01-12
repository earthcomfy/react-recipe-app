import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";

import { addCategory } from "../../../redux/actions/forms";

const categories = [
  {
    id: 1,
    title: "Appetizer",
    description:
      "While eating your appetizer, don't be concerned with dessert. ",
    users: "50 recipes",
  },
  {
    id: 2,
    title: "Dessert",
    description:
      "You can’t buy happiness, but you can buy dessert :) same thing.",
    users: "100 recipes",
  },
  {
    id: 3,
    title: "Main Dish",
    description: "I am not an encore, not a pudding, I am the main dish.",
    users: "270 recipes",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Category({ editMode, recipe }) {
  const [selectedcategories, setSelectedcategories] = useState(
    editMode ? recipe[0].category.name : categories[0].title
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCategory(selectedcategories));
  }, [selectedcategories]);

  return (
    <RadioGroup value={selectedcategories} onChange={setSelectedcategories}>
      <RadioGroup.Label className="text-lg leading-6 font-medium text-gray-900">
        Select a food category
      </RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {categories.map((category) => (
          <RadioGroup.Option
            key={category.id}
            value={category.title}
            className={({ checked, active }) =>
              classNames(
                checked ? "border-transparent" : "border-gray-300",
                active ? "ring-2 ring-teal-500" : "",
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
                    "h-5 w-5 text-teal-600"
                  )}
                  aria-hidden="true"
                />
                <div
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-teal-500" : "border-transparent",
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
