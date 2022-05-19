import React from "react";
import Textfield from "./Textfield";
import Destination from "../pages/Destination";
import Distdata from "./Distdata";
export default function DestinationList(props) {
  return (
    <div>
      <div className="text-black px-5  md:px-10 lg:px-32 mt-[330px] space-x-2 text-2xl md:text-3xl font-semibold">
        <Textfield>{"Inspiration for your next trip"}</Textfield>
        {/* <p> Inspiration for your next trip  </p> */}
      </div>

      <div className="flex  px-5 md:px-10 lg:px-32 space-x-3 lg:space-x-5 overflow-scroll my-10 scrollbar-hide">
        {Distdata.map(function dcard(val, index) {
          return (
            <div key={index}>
              <Destination
                color={val.color}
                imgsrc={val.imgsrc}
                cityname={val.cityname}
                kilometer={val.kilometer}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
