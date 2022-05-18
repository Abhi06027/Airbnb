import React from "react";

function Questionimg(props) {
  return (
    <div className="my-6">
      <img
        className=" w-full h-[520px]  lg:h-[800px] lg:rounded-2xl object-cover"
        src={props.Questionimg}
        alt="Questionimg"
      />
    </div>
  );
}
export default Questionimg;
