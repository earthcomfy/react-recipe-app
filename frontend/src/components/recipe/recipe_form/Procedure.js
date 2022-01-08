import { useState, useEffect, createRef } from "react";
import { useDispatch } from "react-redux";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";

import { addProcedures } from "../../../redux/actions/forms";

export default function Procedure({ editMode, recipe }) {
  let textInput = createRef();

  const dispatch = useDispatch();

  const [procedures, setProcedures] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (recipe && editMode === true) {
      const defaultProcedures = JSON.parse(recipe[0].procedure);

      defaultProcedures.map((defaultProcedure) =>
        setProcedures((e) => [...e, defaultProcedure])
      );
    }
  }, []);

  useEffect(() => {
    dispatch(addProcedures(procedures));
  }, [procedures]);

  const handleClick = () => {
    const value = textInput.current.value;
    if (!procedures.includes(value)) {
      setProcedures((e) => [...e, value]);
    } else {
      alert("Item already exists");
    }
    setInputValue("");
  };

  const handleXClick = (procedure) => {
    setProcedures(procedures.filter((x) => x !== procedure));
  };

  return (
    <>
      <main>
        <div className="space-y-6">
          <div>
            <h1 className="text-lg leading-6 font-medium text-gray-900">
              Procedures
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Fill in the procedures to create your new recipe.
            </p>
          </div>

          <div className="space-y-2">
            <div className="space-y-1">
              <div className="flex">
                <div className="flex-grow">
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    className="block w-full shadow-sm p-2 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Add egg and meat until egg mixture is combined..."
                    ref={textInput}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <div className="ml-3">
                  <button
                    type="button"
                    className="bg-white inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    onClick={handleClick}
                  >
                    <PlusIcon
                      className="-ml-2 mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200">
              <ul className="divide-y divide-gray-200">
                {procedures.map((procedure, idx) => (
                  <li key={procedure} className="py-4 flex">
                    <div className="ml-3 flex flex-grow justify-between">
                      <div>
                        <span className="text-base font-medium text-gray-900">
                          {idx + 1}){" "}
                        </span>
                        <span className="text-base font-medium text-gray-900">
                          {procedure}
                        </span>
                      </div>

                      <div className="">
                        <button
                          type="button"
                          className="bg-white inline-flex items-center px-2 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                          onClick={() => handleXClick(procedure)}
                        >
                          <MinusIcon
                            className="-ml-2 mr-1 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
