import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { XCircleIcon } from "@heroicons/react/solid";
import { clearMessage } from "../../redux/actions/messages";

export default function ErrorDiv() {
  const { msg, isOpen } = useSelector((state) => state.errors);

  const dispatch = useDispatch();

  const [errorKey] = useState({
    username: "Username",
    email: "Email",
    password: "Password",

    title: "Recipe Title",
    desc: "Recipe Description",
    picture: "Recipe Picture",
    category: "Recipe Category",
    ingredients: "Recipe Ingredients",
    procedures: "Recipe Procedures",
    cook_time: "Recipe Cook Time",
  });

  return (
    <>
      {msg && isOpen && (
        <div className="flex justify-center mb-4">
          <div className="rounded-md bg-red-50 p-4 mt-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <XCircleIcon
                  onClick={() => dispatch(clearMessage(msg))}
                  className="h-5 w-5 text-red-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Please correct the following errors to fill out the form.
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul className="list-disc pl-5 space-y-1">
                    {Object.keys(msg).map((error, idx) =>
                      errorKey[error] === undefined ? (
                        <li key={idx}>{msg[error]}</li>
                      ) : (
                        <li key={idx}>
                          {errorKey[error] + " : " + msg[error]}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
