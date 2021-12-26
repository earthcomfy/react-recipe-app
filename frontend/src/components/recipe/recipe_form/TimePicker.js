import React from "react";

export default function TimePicker() {
  return (
    <div>
      <h1 className="text-lg leading-6 font-medium text-gray-900">Cook Time</h1>
      <p className="mt-1 text-sm text-gray-500">
        How long is it going to take to cook?
      </p>
      <div class="mt-1 block p-1 w-40 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md">
        <div class="flex">
          <select
            name="hours"
            class="bg-transparent text-xl appearance-none outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">10</option>
            <option value="12">12</option>
          </select>
          <span class="text-xl mr-3">:</span>
          <select
            name="minutes"
            class="bg-transparent text-xl appearance-none outline-none mr-4"
          >
            <option value="0">00</option>
            <option value="30">30</option>
          </select>
          <select
            name="ampm"
            class="bg-transparent text-xl appearance-none outline-none"
          >
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </select>
        </div>
      </div>
    </div>
  );
}
