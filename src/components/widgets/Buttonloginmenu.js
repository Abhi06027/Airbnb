import React from "react";
import Textfield from "./Textfield";

import Divider from "./Divider";

export default function Buttonloginmenu() {
  return (
    <div className=" bg-white shadow-2xl w-64 h-[430px] right-48 my-2 absolute rounded-2xl">
      <div className=" mx-5  my-3 text-sm cursor-pointer font-semibold    ">
        <div className="hover:bg-gray-200 py-3 hover:bg-opacity-50">
          <Textfield> Messages</Textfield>
        </div>
        <div className="hover:bg-gray-200 py-3 hover:bg-opacity-50">
          <Textfield> Trips</Textfield>
        </div>
        <div className="hover:bg-gray-200 py-3 hover:bg-opacity-50">
          <Textfield> Wishlists</Textfield>
        </div>
      </div>
      <div>
        <Divider></Divider>
      </div>

      <div className=" mx-5 text-sm my-3 font-normal cursor-pointer">
        <div className=" py-3 hover:bg-gray-200 hover:bg-opacity-50  ">
          <Textfield> Host your home</Textfield>
        </div>
        <div className=" py-3 hover:bg-gray-200 hover:bg-opacity-50  ">
          <Textfield> Host an experience</Textfield>
        </div>
        <div className=" py-3 hover:bg-gray-200 hover:bg-opacity-50 ">
          <Textfield> Account</Textfield>
        </div>
      </div>
      <Divider></Divider>

      <div className=" mx-5 text-sm my-3 font-normal cursor-pointer ">
        <div className="   py-3 hover:bg-gray-200 hover:bg-opacity-50 ">
          <Textfield> Help</Textfield>
        </div>
        <div className=" py-3 hover:bg-gray-200 hover:bg-opacity-50 ">
          <Textfield>Log out</Textfield>
        </div>
      </div>
    </div>
  );
}
