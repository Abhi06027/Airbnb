import React from "react";
import Textfield from "./Textfield";
import ButtonRaised from "./ButtonRaised";
import Experiences from "../pages/Experiences";

export default function ExperienceList() {
  return (
    <div>
      <div className="text-black px-5  md:px-10 lg:px-32  py-3 lg:py-6 text-2xl md:text-3xl font-semibold">
        <Textfield>{"Discover Airbnb Experiences"}</Textfield>
      </div>

      <div className="md:flex lg:flex px-5 md:px-10 lg:px-32 md:space-x-4 lg:space-x-6">
        <div>
          <div className="text-white text-3xl lg:text-5xl mt-10 lg:mt-28 px-7 lg:px-16 font-semibold absolute  ">
            <Textfield>{"Things to do "}</Textfield>
            <div className="lg:pt-2">
              <Textfield>{"on your trip"}</Textfield>
            </div>
            <div className="bg-white hover:scale-105 ease-in-out lg:w-36 w-36 text-center px-4 py-3 lg:py-3 lg:px-4 cursor-pointer text-lg lg:text-xl  font-bold  rounded-lg hover:bg-gray-100 my-6 text-black">
              <ButtonRaised>{"Experiences"}</ButtonRaised>
            </div>
          </div>
          <Experiences ExprenceIMG="./images/exprenceimg.jpg" />
        </div>

        <div>
          <div className="text-white text-3xl lg:text-5xl mt-10 lg:mt-28 px-7 lg:px-16 font-semibold absolute ">
            <Textfield>{"Things to do"}</Textfield>
            <div className=" lg:pt-2">
              <Textfield>{"from home"}</Textfield>
            </div>
            <div className="bg-white hover:scale-105 ease-in-out  lg:w-52 w-52 text-center px-4 py-3 lg:py-3 lg:px-4 cursor-pointer text-lg lg:text-xl font-bold  rounded-lg hover:bg-gray-100  my-6 text-black">
              <ButtonRaised>{"Online Experiences"}</ButtonRaised>
            </div>
          </div>

          <Experiences ExprenceIMG="./images/exprenceimg2.jpg" />
        </div>
      </div>
    </div>
  );
}
