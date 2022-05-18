import React from "react";
import Textfield from "./Textfield";
import ButtonRaised from "./ButtonRaised";
import Questionimg from "../pages/Questionimg";

export default function Questionimgmain() {
  return (
    <div>
      <div className="lg:py-12">
        <div className="text-white  px-5 lg:px-48 py-8 lg:py-20 text-5xl lg:text-8xl font-semibold absolute">
          <Textfield>{"Questions"}</Textfield>
          <Textfield>{"about"}</Textfield>
          <Textfield>{"hosting?"}</Textfield>
          <div className="bg-white lg:w-48 hover:scale-105 ease-in-out  w-48 text-center px-4 py-3 lg:py-3 lg:px-4 cursor-pointer text-lg lg:text-xl  font-bold  rounded-lg hover:bg-gray-100 mt-64 text-black">
            <ButtonRaised>{"Ask a Superhost"}</ButtonRaised>
          </div>
        </div>

        <div className="lg:px-32  lg:flex   ">
          <Questionimg Questionimg="./images/Question.jpg" />
        </div>
      </div>
    </div>
  );
}
