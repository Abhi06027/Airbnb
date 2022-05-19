import React from "react";

function Experiences(props) {
  return (
    <div className="my-6 ">
      <img
        className="rounded-xl w-full h-[500px] md:h-[400px] lg:h-[800px] object-cover"
        src={props.ExprenceIMG}
        alt="exprenceimg"
      />
    </div>
  );
}

export default Experiences;
