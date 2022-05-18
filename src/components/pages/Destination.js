import React from "react";
function Destination(props) {
  return (
    <div className={props.color}>
      <div className="  h-[270px] w-[200px] md:h-[380px] md:w-[300px] lg:h-[500px] lg:w-[340px] cursor-pointer ">
        <img
          className="rounded-t-2xl w-[400px]"
          src={props.imgsrc}
          alt="Haldwanimg"
        />
        <div className="text-white text-lg md:text-xl  lg:text-4xl font-semibold px-5 py-5">
          <p>{props.cityname}</p>
          <div className="text-base md:text-sm lg:text-lg py-2">
            <p>{props.kilometer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
