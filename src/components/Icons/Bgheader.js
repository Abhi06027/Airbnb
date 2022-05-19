import React from "react";
import airbnbbg from "./airbnbbg.jpg";
import Textfield from "../widgets/Textfield";
import ButtonRaised from "../widgets/ButtonRaised";

function Bgheader() {
  return (
    <div
      className=" w-full h-[550px] lg:h-[800px] bg-cover bg-center rounded-lg  lg:rounded-2xl"
      style={{ backgroundImage: `url(${airbnbbg})` }}
    >
      <div className="pt-[350px] lg:pt-[600px] text-center text-3xl lg:text-4xl px-6 text-white font-semibold">
        <Textfield>{"Let your curiosity do the booking"} </Textfield>

        <div className="flex justify-center py-6 ">
          <div className="bg-white lg:w-40 w-36 hover:scale-105 ease-in-out   text-center px-4 py-3 lg:py-4 lg:px-4 cursor-pointer text-lg lg:text-xl  rounded-full  text-black">
            <ButtonRaised>{"I’m flexible"}</ButtonRaised>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bgheader;
