import { Fragment, useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";

const procedures = [
  {
    id: 1,
    desc: "Calvin Hawkins",
  },
  {
    id: 2,
    desc: "Bessie Richards",
  },
  {
    id: 3,
    desc: "Floyd Black",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <main>
        <form>
          <div className="space-y-6">
            <div>
              <h1 className="text-lg leading-6 font-medium text-gray-900">
                Procedures
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Get started by filling in the procedures to create your new
                recipe.
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
                      className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Add egg and beat until egg mixture is combined."
                      defaultValue={""}
                    />
                  </div>
                  <span className="ml-3">
                    <button
                      type="button"
                      className="bg-white inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    >
                      <PlusIcon
                        className="-ml-2 mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Add</span>
                    </button>
                  </span>
                </div>
              </div>

              <div className="border-b border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {procedures.map((procedure) => (
                    <li key={procedure.id} className="py-4 flex">
                      <div className="ml-3 flex flex-col">
                        <span className="text-sm font-medium text-gray-900">
                          {procedure.id})
                        </span>
                        <span className="text-sm text-gray-500">
                          {procedure.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
