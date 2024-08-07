import React, { useState } from "react";

function Lecture() {

    // const x = async () => {
    //     const response = await fetch('http://localhost:3001/courses/668fdf1e85fa43238a05f739');
    //     const data = await response.json();
    //     console.log(data);
    // }
    // x();

  return (
    <>
      <div className="flex relative lg:flex-row flex-col gap-5 py-6 px-6 bg-[#eceeef] w-full">
        {/* left */}
        <div className="py-7 px-5 w-full lg:w-3/4 bg-white rounded-xl shadow-lg overflow-hidden">
          <h1 className="border-l-8 text-xl font-semifold border-[#29B475] bg-white px-4 py-1">
            Lecture Dashboard
          </h1>

          {/* tab */}
          <div className="flex items-center w-full h-[40px] mt-2 border-b-2 border-gray-400">
            <div
              className={`px-5 h-full flex items-center border-green-500 border-b-4 hover:cursor-pointer hover:scale-110 duration-300`}
            >
              Lecture
            </div>
            <div className="px-5 hover:cursor-pointer hover:scale-110 duration-300">
              Problems
            </div>
            <div className="px-5 hover:cursor-pointer hover:scale-110 duration-300">
              Assignments
            </div>
          </div>

          {/* Video  */}
          <div className="w-full py-4 px-5">
            <iframe
              className="rounded-xl w-full aspect-[16/9]"
              // width="full" height="315"
              src="https://www.youtube.com/embed/fN74Ate46Z8?si=bNkrleFc44ltVE0t"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div className="my-4 text-black border-[1.5px] border-grey-400"></div>
          <div className="">
            <h2 className="text-2xl">Content</h2>
            <a href="#" className="text-blue-500">
              Link
            </a>
          </div>
        </div>

        {/* right */}
        <div className="w-full sticky top-0 lg:w-1/4 bg-white rounded-xl shadow-lg overflow-hidden overflow-y-auto">
          {/* Module Heading */}
          <div className="flex gap-4 items-center px-4 pt-3 text-md text-ellipsis xl:pt-5 pb-3 hover:bg-[rgb(245,235,235)] hover:cursor-pointer duration-300">
            <span className="text-md bg-slate-200 rounded-full flex justify-center items-center w-[35px] h-[35px]">
              1
            </span>
            <span className="">Lecture Heading</span>
          </div>

          {/* Lecture List */}
          <div className="flex gap-4 items-center px-4 py-5 border-grey-300 border-t-[1px] border-b-[1px] hover:bg-[rgb(245,235,235)] hover:cursor-pointer duration-300">
            
            {/* Checkbox */}
            <div className=" flex items-center gap-3">
              <label className="text-white">
                <input
                  className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
                  type="checkbox"
                />
              </label>
            </div>

            {/* Lecture Name */}
            <div className="flex items-center text-sm">
            Namaste DSA
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Lecture;
