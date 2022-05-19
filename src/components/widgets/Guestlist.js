import React from "react";
import Textfield from "./Textfield";
import Plus from "../Icons/Plus";
import Minus from "../Icons/Minus";
import Divider from "./Divider";

export default function Guestlist() {
  return (
    <div className=" bg-white  ml-96 my-5 shadow-2xl w-96 h-96 z-20 p-10 absolute  rounded-3xl">
      <div className="flex items-center py-5  justify-between ">
        <div className="  text-sm   font-semibold    ">
          <Textfield> Adults </Textfield>
          <div className=" font-normal text-gray-400  ">
            <Textfield> Ages 13 or above </Textfield>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-3">
          <Minus></Minus>
          <Textfield>0</Textfield>
          <Plus></Plus>
        </div>
      </div>
      <Divider></Divider>
      <div className="flex items-center py-5 justify-between space-x-3  ">
        <div className="  text-sm   font-semibold    ">
          <Textfield> Children</Textfield>
          <div className=" font-normal text-gray-400  ">
            <Textfield> Ages 2–12</Textfield>
          </div>
        </div>

        <div className="flex items-center justify-between space-x-3  ">
          <Minus></Minus>
          <Textfield>0</Textfield>
          <Plus></Plus>
        </div>
      </div>
      <Divider></Divider>
      <div className="flex items-center py-5 justify-between  ">
        <div className="  text-sm   font-semibold    ">
          <Textfield> Infants</Textfield>
          <div className=" font-normal text-gray-400  ">
            <Textfield> Under 2</Textfield>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-3   ">
          <Minus></Minus>
          <Textfield>0</Textfield>
          <Plus></Plus>
        </div>
      </div>
      <Divider></Divider>
      <div className="flex items-center py-5 justify-between  ">
        <div className="  text-sm   font-semibold    ">
          <Textfield> Pets</Textfield>
          <div className=" font-normal text-gray-500 underline cursor-pointer">
            <Textfield> Bringing a service animal?</Textfield>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-3">
          <Minus></Minus>
          <Textfield>0</Textfield>
          <Plus></Plus>
        </div>
      </div>
    </div>
  );
}
