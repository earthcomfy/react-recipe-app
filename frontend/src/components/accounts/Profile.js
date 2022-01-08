import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PencilIcon } from "@heroicons/react/solid";

import {
  editUser,
  changePassword,
  changeAvatar,
} from "../../redux/actions/user";

export default function Profile() {
  const dispatch = useDispatch();

  const { user, avatar } = useSelector((state) => state.user);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const [picture, setPicture] = useState(null);

  const [opassword, setOpassword] = useState(null);
  const [npassword, setNpassword] = useState(null);

  const handleAvatarChange = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("avatar", picture, picture.name);

    dispatch(changeAvatar(formData));
  };

  return (
    <>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Update Profile
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="mt-4  md:mt-0">
              <div className="flex items-center">
                <label htmlFor="picture" className="relative cursor-pointer">
                  <img
                    className="h-16 w-16 rounded-full block"
                    src={avatar.avatar}
                    alt=""
                  />
                  <input
                    id="picture"
                    name="picture"
                    type="file"
                    className="sr-only"
                    onChange={(e) => {
                      setPicture(e.target.files[0]);
                    }}
                  />
                </label>
                <div>
                  <button
                    type="button"
                    className="ml-2 bg-white py-2 px-2 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    onClick={handleAvatarChange}
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  defaultValue={user.username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  defaultValue={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex justify-center mt-2 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            onClick={() => dispatch(editUser(username, email))}
          >
            <PencilIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>Update</span>
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Change Password
          </h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="mt-4 md:mt-0">
              <div>
                <label htmlFor="opassword" className="sr-only">
                  Old Password
                </label>
                <input
                  id="opassword"
                  name="opassword"
                  type="password"
                  autoComplete="old-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Old Password"
                  onChange={(e) => setOpassword(e.target.value)}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="password" className="sr-only">
                  New Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="New Password"
                  onChange={(e) => setNpassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="inline-flex justify-center mt-2 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                onClick={() => dispatch(changePassword(opassword, npassword))}
              >
                <PencilIcon
                  className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Update</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
