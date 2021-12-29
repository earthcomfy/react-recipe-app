import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addCooktime } from "../../../redux/actions/forms";

export default function TimePicker() {
  const dispatch = useDispatch();
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const cook_time = `${hours}:${minutes}:${seconds}`;
    dispatch(addCooktime(cook_time));
  }, [hours, minutes, seconds]);

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
            onChange={(e) => setHours(e.target.value)}
          >
            <option value="0">0</option>
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
            onChange={(e) => setMinutes(e.target.value)}
          >
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">10</option>
            <option value="12">12</option>
          </select>
          <span class="text-xl mr-3">:</span>
          <select
            name="seconds"
            class="bg-transparent text-xl appearance-none outline-none"
            onChange={(e) => setSeconds(e.target.value)}
          >
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">10</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>
    </div>
  );
}
