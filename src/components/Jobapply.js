import React from "react";
import "../css/job.css";
const Jobapply = () => {
  // const expData = "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/experience+video/ABHISHEK_TESTI.mp4";
  return (
    <div className="container flex items-center justify-between">
      <div>
        <h1>Apply Here</h1>
        <div className="form">
          <div class="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
            <h2 className="text-black font-bold text-lg">
              Shipping Label Address Form
            </h2>

            <div className="mt-4">
              <label className="text-black" for="name">
                Name
              </label>
              <input
                placeholder="Your name"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                type="text"
                required
              />
            </div>

            <div className="mt-4">
              <label className="text-black" for="name">
                Number
              </label>
              <input
                placeholder="Your number"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                type="text"
                required
              />
            </div>

            <div className="mt-4">
              <label className="text-black" for="name">
                Email
              </label>
              <input
                placeholder="Your number"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                type="text"
                required
              />
            </div>

            <div className="flex-1">
              <label className="text-black" for="country">
                Job Roll
              </label>
              <select
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="country"
              >
                <option required value="">
                  Select a country
                </option>
                <option value="AF">Anchor</option>
                <option value="DZ">Flim Maker</option>
                <option value="AO">Backend Developer</option>
                ...
                <option value="ZW">Story Teller</option>
                <option value="AM">Actor/Model</option>
                <option value="AZ">Flutter Developer</option>
                <option value="BH">IOS Developer</option>
                ...
                <option value="YE">Illustrater Designer</option>
                <option value="AR">Psycology Teacher</option>
                <option value="BO">Degital Marketing</option>
                <option value="BR">Sanskrit teacher</option>
                ... ...
              </select>
            </div>

            <div className="mt-4 flex flex-row space-x-2">
              <div className="flex-1">
                <label className="text-black" for="city">
                  Country
                </label>
                <input
                  required
                  placeholder="Your city"
                  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  id="city"
                  type="text"
                />
              </div>

              <div className="flex-1">
                <label className="text-black" for="state">
                  State
                </label>
                <input
                  required
                  placeholder="Your state"
                  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  id="state"
                  type="text"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-row space-x-2">
              <div className="flex-1">
                <label className="text-black" for="zip">
                  Add Resume
                </label>
                <input
                  required
                  placeholder="Your ZIP code"
                  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  id="zip"
                  type="file"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                className="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <video
          className="rounded-lg"
          src="https://mentoons-website.s3.ap-northeast-1.amazonaws.com/experience+video/AYUSHI_TESTI.mp4"
          width="700"
          height="400"
          loop
          autoPlay
          controls
          controlsList="nodownload"
        ></video>
      </div>
    </div>
  );
};

export default Jobapply;
