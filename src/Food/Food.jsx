import React, { useState } from "react";
import food from "../food.json";
import { AiFillStar } from "react-icons/ai";

export default function Food() {
  console.log(food);
  const [item, setItem] = useState(food);

  const handleFilter = (catItem) => {
    const updatItem = food.filter((el) => {
      return el.category === catItem;
    });
    console.log("updatItem :", updatItem);
    setItem(updatItem);
  };

  return (
    <div className="flex flex-col gap-y-6">
      <h1 className=" text-2xl font-semibold text-center bg-slate-300 ">
        Delivery Restaurants in Mumbai
      </h1>

      <div className="flex justify-around min-[320px]:w-[100%] m-auto sm:w-[60%]">
        <button
          className="bg-red-500 px-4 py-2 rounded-lg  text-white font-semibold "
          onClick={() => handleFilter("Spanish")}
        >
          Spanish
        </button>
        <button
          className="bg-red-500 px-4 py-2 rounded-lg  text-white font-semibold "
          onClick={() => handleFilter("Russian")}
        >
          Russian
        </button>
        <button
          className="bg-red-500 px-4 py-2 rounded-lg  text-white font-semibold "
          onClick={() => handleFilter("Paella")}
        >
          Paella
        </button>
        <button
          className="bg-red-500  px-4 py-2 rounded-lg text-white font-semibold "
          onClick={() => handleFilter("Indian")}
        >
          Indian
        </button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-5 px-4">
        {item.map((el, ind) => {
          return (
            <div className=" flex flex-col flex-wrap" key={ind}>
              <div className=" md:px-4 md:py-4 rounded-xl hover:shadow-2xl w-[100%]  gap-y-4">
                <div className="w-[350px] flex flex-col  rounded-2xl overflow-hidden h-[250px] ">
                  <img
                    className=" object-cover w-[100%] h-[100%]"
                    src="https://b.zmtcdn.com/data/pictures/7/18461677/42b91d01dd06a8830422636e3dde7272_o2_featured_v2.jpg"
                    alt="img"
                  />
                  <div className="flex justify-between relative bottom-9">
                    <p className="bg-[#256fef] inline-block font-[400] text-slate-50 rounded-md px-2">
                      50% OFF up to 100
                    </p>

                    <p
                      className="bg-[#f5ebd9] inline-block rounded-md px-2
           mr-4"
                    >
                      19 min
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-xl font-semibold">{el.name}</p>
                    <p className="text-[15px]   text-slate-400">
                      {el.category}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="bg-green-400 px-2 rounded-md flex items-center justify-around gap-x-1  text-slate-50 font-semibold">
                      <p>3.3 </p>
                      <AiFillStar size={12} />
                    </span>
                    <div className="text-[15px]   text-slate-400">
                      {" "}
                      ₹100 for one
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <span className="text-[15px]   text-slate-400">
                    {" "}
                    350+ ordrrs placed from here recently
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
